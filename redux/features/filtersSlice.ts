import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarProps } from "@/types";
type FilterSlice = {
  fuel: string;
  year: number;
  limit: number;
  manufacturer: string;
  allCars: CarProps[] | null;
};

const initialState = {
  fuel: "",
  year: 2022,
  limit: 10,
  manufacturer: "",
  allCars: null,
} as FilterSlice;

export const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setFilter: (
      state,
      action: PayloadAction<{ title: string; value: any }>
    ) => {
      if (action.payload.title === "fuel") {
        state.fuel = action.payload.value;
      } else if (action.payload.title === "year") {
        state.year = action.payload.value;
      } else if (action.payload.title === "manufacturer") {
        state.manufacturer = action.payload.value;
      } else {
        state.limit = action.payload.value;
      }
    },
    setCars: (state, action: PayloadAction<CarProps[]>) => {
      state.allCars = action.payload;
    },
  },
});

export const { setFilter, setCars } = filters.actions;
export default filters.reducer;
