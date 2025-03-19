import { useState } from "react";
import PaginationButtons from "./PaginationButtons";
import ShowPerPage from "./ShowPerPage";

const Pagination = () => {
  return (
    <div className="flex justify-between">
      <ShowPerPage />
      <PaginationButtons />
    </div>
  );
};

export default Pagination;
