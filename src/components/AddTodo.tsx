import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const AddTodo = () => {
  return (
    <form className="flex gap-2" action="#" method="POST">
      <Input
        placeholder="Add a new todo..."
        className="placeholder: placeholder:text-gray-500"
      />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Work" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
        </SelectContent>
        <Button className="cursor-pointer" variant="secondary">
          <Plus />
          Add
        </Button>
      </Select>
    </form>
  );
};
export default AddTodo;
