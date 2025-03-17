import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

const ShowPerPage = () => {
  return (
    <div className="flex items-center text-lg">
      <p>Show: </p>
      <div className="cursor-pointer">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="5 per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
            <SelectItem value="all">Show All</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default ShowPerPage;
