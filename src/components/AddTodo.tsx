import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAddTodoMutation } from "@/store/todosApi";
import { useSonner } from "sonner";

const AddTodo = () => {
  const [addTodo, { isLoading, error }] = useAddTodoMutation();
  const sonner = useSonner();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("text") as string;
    const category = formData.get("category") as string;
    addTodo({
      text,
      category,
      completed: false,
      description: "",
    })
      .unwrap()
      .then(() => {
        sonner.success(`Todo added: ${text}`);
      })
      .catch(() => {
        sonner.error("Error adding todo!");
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
          <SelectItem value="Work">Work</SelectItem>
          <SelectItem value="Personal">Personal</SelectItem>
          <SelectItem value="Shopping">Shopping</SelectItem>
          <SelectItem value="Health">Health</SelectItem>
          <SelectItem value="Learning">Learning</SelectItem>
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
