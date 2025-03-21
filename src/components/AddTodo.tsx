import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAddTodoMutation } from "@/store/todosApi";

const AddTodo = () => {
  const [addTodo, { isLoading, error }] = useAddTodoMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("text") as string;
    const category = formData.get("category") as string;
    console.log(formData);
    console.log(text);
    console.log(category);
    addTodo({
      text,
      category,
      completed: false,
      description: "",
    });
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Input name="text" placeholder="Add a new todo..." className="placeholder:text-gray-500" />
      <Select name="category">
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder="Work" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="health">Health</SelectItem>
          <SelectItem value="learning">Learning</SelectItem>
        </SelectContent>
      </Select>
      <Button className="cursor-pointer" variant="secondary" type="submit">
        <Plus />
        Add
      </Button>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error adding todo!</div>}
    </form>
  );
};

export default AddTodo;
