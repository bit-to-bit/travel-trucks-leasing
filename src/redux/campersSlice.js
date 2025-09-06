import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "../api/campers";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    camper: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    setCampers: (state, { payload }) => {
      state = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.campers = action.payload;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.camper = action.payload;
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const selectCamper = (state) => state.campers.camper;

export const campersReducer = campersSlice.reducer;
export const { addFilter, removFilter, setLocation } = campersSlice.actions;
