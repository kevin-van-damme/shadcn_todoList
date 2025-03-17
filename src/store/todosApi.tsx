import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type TodoElement, type Todo, type Category } from "@/types";

const todosApi = createApi({
  tagTypes: ["Todos"],
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo, void>({
      query: () => "/todos",
      providesTags: ["Todos"],
    }),
  }),
});

export default todosApi;
export const { useGetTodosQuery } = todosApi;
