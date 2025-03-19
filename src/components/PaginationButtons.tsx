import { useState } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const PaginationButtons = () => {
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="border-1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="border-1">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="rounded-md border-1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border-1" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationButtons;
