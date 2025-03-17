import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TodoElement, type Category, type Todo } from "@/types";

const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoElement, void>({
      query: () => "/todos",
    }),
    getCategories: builder.query<Category, void>({
      query: () => "/categories",
    }),
    addTodo: builder.query<Todo, void>({
      query: (str) => ({
        url: "/",
        method: "POST",
        body: {
          text: str,
          category: str,
          completed: false,
        },
      }),
    }),
  }),
});

export default todosApi;
export const { useGetTodosQuery, useGetCategoriesQuery, useAddTodoQuery } =
  todosApi;
