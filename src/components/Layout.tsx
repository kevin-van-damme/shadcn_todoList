import { ModeToggle } from "./ui/mode-toggle";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import FiltersTodo from "./FiltersTodo";
import Pagination from "./Pagination";
import Stats from "./Stats";
const Layout = () => {
  return (
    <div className="mx-auto max-w-4xl text-2xl">
      <div className="mt-30 flex justify-between">
        <h2 className="text-4xl font-bold">Todo App</h2>
        <ModeToggle />
      </div>
      <section className="mt-10 space-y-4">
        <AddTodo />
        <FiltersTodo />
        <TodoList />
        <Pagination />
        <hr />
        <Stats />
      </section>
    </div>
  );
};
export default Layout;
