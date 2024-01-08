import { createSlice, nanoid } from "@reduxjs/toolkit";
import { resetForm } from "../actions";
const carsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      state.data.push({ ...action.payload, id: nanoid(5) });
    },
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    removeCar(state, action) {
      const carId = action.payload;
      state.data = state.data.filter((car) => car.id !== carId);
    },
    resetData(state) {
      state.data = [];
    },
    resetSearchTerm(state) {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetForm, (state, action) => {
      state.searchTerm = "";
    });
  },
});

export const {
  addCar,
  updateSearchTerm,
  removeCar,
  resetCars,
  resetSearchTerm,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
