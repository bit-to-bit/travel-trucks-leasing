import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { onFilters: [], location: "" },
  reducers: {
    addFilter: (state, { payload }) => {
      state.onFilters.push(payload);
    },
    removFilter: (state, { payload }) => {
      state.onFilters = state.onFilters.filter((el) => el !== payload);
    },
    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { addFilter, removFilter, setLocation } = filtersSlice.actions;
