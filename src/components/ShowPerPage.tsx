import { SelectContent, SelectItem } from "@radix-ui/react-select";

const ShowPerPage = () => {
  return (
    <div>
      <p>Show: </p>
      <SelectContent>
        <SelectItem value="5">5 per page</SelectItem>
        <SelectItem value="10">10 per page</SelectItem>
        <SelectItem value="20">20 per page</SelectItem>
        <SelectItem value="all">Show All</SelectItem>
      </SelectContent>
    </div>
  );
};
export default ShowPerPage;
