import { ModeToggle } from "./ui/mode-toggle";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Pagination from "./Pagination";
const Layout = () => {
  return (
    <div className="mx-auto max-w-4xl text-2xl">
      <div className="mt-30 flex justify-between">
        <h2 className="font-bold">Todo App</h2>
        <ModeToggle />
      </div>
      <section className="mt-10 space-y-4">
        <AddTodo />
        <TodoList />
        {/* <Pagination /> */}
        <p>STATS</p>
      </section>
    </div>
  );
};
export default Layout;
