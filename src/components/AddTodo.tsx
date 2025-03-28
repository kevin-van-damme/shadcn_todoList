import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useAddTodoMutation } from "@/store/todosApi";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const AddTodo = () => {
  const [addTodo, { isLoading, error }] = useAddTodoMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("text") as string;
    const category = formData.get("category") as string;
    if (!text) {
      toast.error("Please fill in the text and choose a category!");
    } else {
      addTodo({
        text,
        category,
        completed: false,
        description: "This is a default todo, please edit the description asap!",
      }).unwrap();
      toast.success(`Todo added: ${text}`);
    }
  };
  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <Toaster />
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
