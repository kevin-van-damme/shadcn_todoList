import { configureStore } from "@reduxjs/toolkit/react";
import todosApi from "./todosApi";
import filterReducer from "./filterSlice";

const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todosApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
