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
    <div className="flex gap-2">
      <Input />
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
    </div>
  );
};
export default AddTodo;
