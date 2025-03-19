import { SelectContent, SelectItem, Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetTodosQuery } from "@/store/todosApi";

const ShowPerPage = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Error loading todos...</div>;
  }
  return (
    <div className="flex items-center gap-2 text-lg">
      <p className="text-md text-slate-600">Show: </p>
      <div>
        <Select>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="5 per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Show All</SelectItem>
            <SelectItem value="5">5 per page</SelectItem>
            <SelectItem value="10">10 per page</SelectItem>
            <SelectItem value="15">15 per page</SelectItem>
            <SelectItem value="20">20 per page</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default ShowPerPage;
