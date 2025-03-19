import { SelectContent, SelectItem, Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetTodosQuery } from "@/store/todosApi";

const ShowPerPage = () => {
  const { data, isLoading, error } = useGetTodosQuery({
    page: 1,
    perPage: 5,
  });

  {
    isLoading && <div>Loading...</div>;
  }
  {
    error && <div>Error loading todos...</div>;
  }
  return (
    <div className="flex items-center gap-2 text-lg">
      <p className="text-md text-slate-600">Show: </p>
      <div className="cursor-pointer">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="5 per page" />
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
  );
};
export default ShowPerPage;
