import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from './features/filtersSlice'
export const store = configureStore({
  reducer: {
    filtersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
