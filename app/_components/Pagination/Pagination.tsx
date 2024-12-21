"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ShadcnPagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    console.log("here");
    if (page >= 1 && page <= totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", page.toString());

      router.push(`?${params.toString()}`);
    }
  };

  console.log("totalPages", totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (page !== 1) handlePageChange(page - 1);
            }}
          >
            Previous
          </PaginationPrevious>
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => {
          const pageItem = index + 1;
          return (
            <PaginationItem
              key={index}
              onClick={() => {
                if (pageItem !== page) handlePageChange(pageItem);
              }}
              className={`cursor-pointer px-3 py-2 rounded-lg transition-colors ${
                pageItem === (page || 1) // Default to page 1 if page is falsy
                  ? "bg-blue-600 text-white font-bold"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {pageItem}
            </PaginationItem>
          );
        })}

        {totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {/* Next Button */}
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (totalPages !== page) handlePageChange(page + 1);
            }}
            aria-disabled
          >
            Next
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
