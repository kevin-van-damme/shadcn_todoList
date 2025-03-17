import { useGetTodosQuery, useGetCategoriesQuery } from "../store/todosApi";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Pencil } from "lucide-react";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TodoItem = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  const { categories } = useGetCategoriesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  console.log(todos);
  return (
    <li>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="space-y-3 rounded-md bg-slate-100 px-2 outline-1 outline-slate-300"
              >
                <AccordionTrigger>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-10">
                      <Checkbox id="todosText" />
                      <label htmlFor="todosText">{todo.text}</label>
                    </div>
                    <div className="flex gap-10">
                      {categories &&
                        categories.map((category) => (
                          <div key={category.id}>
                            <Badge variant="default">{todo.category}</Badge>
                          </div>
                        ))}
                      <Pencil />
                      <X />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{todo.description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
    </li>
  );
};
export default TodoItem;
