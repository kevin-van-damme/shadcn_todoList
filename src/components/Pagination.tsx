import { useState } from "react";
import PaginationButtons from "./PaginationButtons";
import ShowPerPage from "./ShowPerPage";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  return (
    <div className="flex justify-between">
      <ShowPerPage limit={limit} setLimit={setLimit} />
      <PaginationButtons page={page} setPage={setPage} hasMore={true} />
    </div>
  );
};

export default Pagination;
