import { useGetTodosQuery, useGetCategoriesQuery } from "../store/todosApi";
import { Badge } from "@/components/ui/badge";
import { Pencil } from "lucide-react";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

const TodoItem = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  const { data: categories } = useGetCategoriesQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  const cats = Array.isArray(categories) ? categories : [];
  console.log(todos);
  console.log(cats);
  return (
    <li>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="space-y-3 rounded-md px-3 outline-1 outline-slate-300"
              >
                <AccordionTrigger>
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label className="cursor-pointer">{todo.text}</label>
                    </div>
                    <div className="bg- flex gap-5">
                      <Badge className="cursor-pointer">{todo.category}</Badge>
                      <Pencil className="cursor-pointer" />
                      <X className="cursor-pointer" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  <span>Description</span>
                  <div>
                    <Textarea value={todo.description} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
    </li>
  );
};
export default TodoItem;
