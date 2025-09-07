import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "../api/campers";
import { camperDetailsList, filterVehicleEquipment } from "../constants";

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

export const selectCamperDetails = createSelector([selectCamper], (camper) => {
  if (camper !== null) {
    const res = camperDetailsList.map((el) => ({
      item: el.caption,
      value: camper[el.name],
    }));
    return res;
  }
  return null;
});

export const selectCamperProperties = createSelector(
  [selectCamper],
  (camper) => {
    if (camper !== null) {
      const res = filterVehicleEquipment
        .filter((el) => el.trueValue === camper[el.key])
        .map((el) => ({
          name: el.name,
          ico: el.ico,
        }));
      return res;
    }
    return null;
  }
);

export const selectCamperReviews = createSelector([selectCamper], (camper) => {
  return camper ? camper.reviews : null;
});

export const campersReducer = campersSlice.reducer;
export const { addFilter, removFilter, setLocation } = campersSlice.actions;
