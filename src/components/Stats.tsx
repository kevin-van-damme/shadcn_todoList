import { useGetTodosQuery } from "../store/todosApi";
const Stats = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  return (
    <div className="text-slate-500">
      <div className="flex w-full justify-between pb-4 text-xl">
        <div>Total: {todos.length}</div>
        <div>Active: 5</div>
        <div>Completed: 8</div>
        <div>40% Completed</div>
      </div>
    </div>
  );
};
export default Stats;
