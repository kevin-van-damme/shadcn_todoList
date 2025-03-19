import { useGetTodosQuery } from "../store/todosApi";

const Stats = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = todos.length - completedTodos;
  const completionRate = todos.length
    ? ((completedTodos / todos.length) * 100).toFixed(2)
    : 0;
  return (
    <div className="text-slate-500">
      <div className="flex w-full justify-between pb-4 text-lg">
        <div>Total: {todos.length}</div>
        <div>Active: {activeTodos}</div>
        <div>Completed: {completedTodos}</div>
        <div>{completionRate}% Completed</div>
      </div>
    </div>
  );
};

export default Stats;
