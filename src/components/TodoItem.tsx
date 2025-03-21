import { useState } from "react";
import { useGetTodosQuery, useGetCategoriesQuery } from "../store/todosApi";
import { Badge } from "@/components/ui/badge";
import { Pencil, X } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { useRemoveTodoMutation } from "../store/todosApi";
import { useEditTodoMutation } from "../store/todosApi";

const TodoItem = () => {
  const { data, isLoading, error } = useGetTodosQuery();
  const { data: categories } = useGetCategoriesQuery();
  const [removeTodo] = useRemoveTodoMutation();
  const [editTodo] = useEditTodoMutation();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos!</div>;
  const todos = Array.isArray(data) ? data : [];
  const cats = Array.isArray(categories) ? categories : [];

  return (
    <div>
      <ul>
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${todo.id}`} className="space-y-3 rounded-md px-3 outline-1 outline-slate-300">
                  <AccordionTrigger>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <label className="cursor-pointer">{todo.text}</label>
                      </div>
                      <div className="flex gap-5">
                        <div className="bg- flex gap-5">
                          <Badge
                            className="cursor-pointer"
                            style={{
                              backgroundColor: cats.find((category) => category.name === todo.category)?.color,
                            }}
                          >
                            {todo.category}
                          </Badge>
                          <Pencil className="cursor-pointer text-slate-500 hover:text-slate-200" />
                          <X className="cursor-pointer text-slate-500 hover:text-red-400" onClick={() => removeTodo(todo.id)} />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <span>Description</span>
                    <Textarea defaultValue={todo.description} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoItem;
