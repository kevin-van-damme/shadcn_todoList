import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  status: string;
}

const initialState: FilterState = {
  category: "all",
  status: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setCategory, setStatus } = filterSlice.actions;
export default filterSlice.reducer;
