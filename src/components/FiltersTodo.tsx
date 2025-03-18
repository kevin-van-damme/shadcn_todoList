import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FiltersTodo = () => {
  return (
    <div className="flex gap-2 text-lg">
      <div>
        <Select>
          <SelectTrigger className="w-[180px] cursor-pointer">
            <SelectValue placeholder="Show All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Show All Categories</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="shopping">Shopping</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Select>
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
