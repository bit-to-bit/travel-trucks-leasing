import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["isFavorite"], // зберігаємо тільки isFavorite
};

const persistedCampersReducer = persistReducer(
  campersPersistConfig,
  campersReducer
);

export const store = configureStore({
  reducer: {
    campers: persistedCampersReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
