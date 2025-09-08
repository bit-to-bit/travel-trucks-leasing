import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { onFilters: [], location: "" },
  reducers: {
    setOnFilters: (state, { payload }) => {
      const idx = state.onFilters.findIndex(
        (el) =>
          el["key"] === payload["key"] &&
          el["trueValue"] === payload["trueValue"]
      );

      if (idx === -1) {
        state.onFilters.push(payload);
        return;
      }

      state.onFilters = state.onFilters.filter(
        (el) =>
          !(
            el["key"] === payload["key"] &&
            el["trueValue"] === payload["trueValue"]
          )
      );
    },

    setLocation: (state, { payload }) => {
      state.location = payload;
    },
  },
});

export const selectOnFilters = (state) => state.filters.onFilters;
export const selectLocation = (state) => state.filters.location;

export const filtersReducer = filtersSlice.reducer;
export const { setLocation, setOnFilters } = filtersSlice.actions;
