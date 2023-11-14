import { InvoicesTableSkeleton } from "@/src/components/skeletons";
import { CreateInvoice } from "@/src/components/invoices/buttons";
import Search from "@/src/ui/search";
import { lusitana } from "@/src/utils/fonts";
import { Suspense } from "react";
import Table from "@/src/components/invoices/table";
import { fetchInvoicesPages } from "@/src/services/data";
import Pagination from "@/src/components/invoices/pagination";

const Invoices = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Invoices;