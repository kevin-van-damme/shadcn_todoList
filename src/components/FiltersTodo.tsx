import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "@/store/todosApi";
import { setCategory, setStatus } from "@/store/filterSlice";
import { RootState } from "@/store/index";

const FiltersTodo = () => {
  const dispatch = useDispatch();
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const selectedCategory = useSelector((state: RootState) => state.filter.category);
  const selectedStatus = useSelector((state: RootState) => state.filter.status);
  console.log(selectedCategory, "Selected Category");

  return (
    <div className="flex gap-2 text-lg">
      <div>
        <Select value={selectedCategory} onValueChange={(value) => dispatch(setCategory(value))}>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Show All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Show All Categories</SelectItem>
            {!isLoading &&
              categories?.map((category) => (
                <SelectItem key={category.id} value={category.name}>
                  {category.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select value={selectedStatus} onValueChange={(value) => dispatch(setStatus(value))}>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Show All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Show All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="uncompleted">Uncompleted</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FiltersTodo;
