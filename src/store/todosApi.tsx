import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TodoElement, type Category, type Todo } from "@/types";
import { type ListResponse } from "@/types";

const todosApi = createApi({
  tagTypes: ["Todo"],
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://scratch-magnetic-mango.glitch.me",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<ListResponse<TodoElement[]>, number | void>({
      query: (page = 1) => `/todos?page=${page}`,
      providesTags: ["Todo"],
    }),
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation<Todo, Omit<TodoElement, "id">>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation<Todo, { id: string; todo: Partial<Omit<TodoElement, "id">> }>({
      query: (obj) => ({
        url: `/todos/${obj.id}`,
        method: "PATCH",
        body: obj.todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    removeTodo: builder.mutation<Todo, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export default todosApi;
export const { useGetTodosQuery, useGetCategoriesQuery, useAddTodoMutation, useRemoveTodoMutation, useUpdateTodoMutation } = todosApi;
