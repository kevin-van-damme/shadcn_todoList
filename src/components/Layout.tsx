import { ModeToggle } from "./ui/mode-toggle";
const Layout = () => {
  return (
    <div className="mx-auto max-w-4xl text-2xl">
      <div className="mt-30 flex justify-between">
        <h2 className="font-bold">Todo App</h2>
        <ModeToggle />
      </div>
      <section>
        <p>FORM FILTER</p>
        <p>DROPDOWNFILTER</p>
        <p>TODOLIST</p>
        <p>PAGINATION</p>
        <p>STATS</p>
      </section>
    </div>
  );
};
export default Layout;
