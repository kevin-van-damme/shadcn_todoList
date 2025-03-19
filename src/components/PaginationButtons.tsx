import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasMore: boolean;
}

const PaginationButtons: React.FC<PaginationProps> = ({
  page,
  setPage,
  hasMore,
}) => {
  return (
    <Pagination className="mt-4 flex justify-center">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${page === 1 ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => page > 1 && setPage((prev) => prev - 1)}
            aria-disabled={page === 1}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink className="cursor-pointer">{page}</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${!hasMore ? "pointer-events-none opacity-50" : ""}`}
            onClick={() => hasMore && setPage((prev) => prev + 1)}
            aria-disabled={!hasMore}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationButtons;
