import { useState } from "react";
import { SelectContent, SelectItem, Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetTodosQuery } from "@/store/todosApi";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const { data, isLoading, error } = useGetTodosQuery();

  const handlePerPageChange = (value: string) => {
    if (value === "all") {
      setPerPage(Number.MAX_SAFE_INTEGER);
    } else {
      setPerPage(Number(value));
    }
    setPage(1);
  };

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = data?.data?.slice(startIndex, endIndex);

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2 text-lg">
        <p className="text-md text-slate-600">Show: </p>
        <div>
          <Select onValueChange={handlePerPageChange}>
            <SelectTrigger className="w-[180px] cursor-pointer">
              <SelectValue placeholder={`${perPage} per page`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 per page</SelectItem>
              <SelectItem value="10">10 per page</SelectItem>
              <SelectItem value="15">15 per page</SelectItem>
              <SelectItem value="20">20 per page</SelectItem>
              <SelectItem value="all">Show All</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="cursor-pointer rounded-md border-1 p-2.5 text-sm hover:bg-slate-600" onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button className="cursor-pointer rounded-md border-1 p-2.5 text-sm hover:bg-slate-600" onClick={() => setPage(page + 1)} disabled={paginatedData?.length === undefined || paginatedData?.length < perPage}>
          Next
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Can't load todos...</div>}
    </div>
  );
};

export default Pagination;
