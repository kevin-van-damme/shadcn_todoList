import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string | null;
  completed: boolean | null;
}

const initialState: FilterState = {
  category: null,
  completed: null,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setCompleted: (state, action: PayloadAction<boolean | null>) => {
      state.completed = action.payload;
    },
    resetFilters: (state) => {
      state.category = null;
      state.completed = null;
    },
  },
});

export const { setCategory, setCompleted, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
