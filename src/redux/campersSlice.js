import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../api/campers";

const campersSlice = createSlice({
  name: "campers",
  initialState: { campers: [], isLoading: false, error: null },
  reducers: {
    setCampers: (state, { payload }) => {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.campers = action.payload;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = campersSlice.reducer;
export const { addFilter, removFilter, setLocation } = campersSlice.actions;
