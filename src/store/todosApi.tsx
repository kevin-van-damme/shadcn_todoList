import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TodoElement, type Category, type Todo } from "@/types";

const todosApi = createApi({
  tagTypes: ["Todo"],
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://scratch-magnetic-mango.glitch.me",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodoElement, void>({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),
    getCategories: builder.query<Category, void>({
      query: () => "/categories",
      providesTags: ["Todo"],
    }),
    addTodo: builder.mutation<Todo, TodoElement>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    editTodo: builder.mutation<Todo, TodoElement>({
      query: (todo) => ({
        url: `/todos/${todo}`,
        method: "PUT",
        body: todo,
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
export const { useGetTodosQuery, useGetCategoriesQuery, useAddTodoMutation, useRemoveTodoMutation, useEditTodoMutation } = todosApi;
