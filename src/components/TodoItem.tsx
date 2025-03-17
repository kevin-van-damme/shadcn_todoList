import { useGetTodosQuery } from "../store/todosApi";
import { Label } from "@/components/ui/label";

const TodoItem = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <Label htmlFor="todo">{todo.text}</Label>
          </div>
        ))}
    </div>
  );
};
export default TodoItem;
