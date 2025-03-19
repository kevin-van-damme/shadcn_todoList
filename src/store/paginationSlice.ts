import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
  limit: number;
}

const initialState: PaginationState = {
  page: 1,
  limit: 5,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    resetPagination: (state) => {
      state.page = 1;
      state.limit = 5;
    },
  },
});

export const { setPage, setLimit, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;
