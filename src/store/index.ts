import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./paginationSlice";
import filterReducer from "./filterSlice";
import todosApi from "./todosApi";

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    pagination: paginationReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todosApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
