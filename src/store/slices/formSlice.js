import { createSlice } from "@reduxjs/toolkit";
import { resetForm } from "../actions";
import { addCar } from "./carsSlice";
const formSlice = createSlice({
  name: "form",
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateCost(state, action) {
      state.cost = action.payload;
    },
    // resetForm(state) {
    //   state.name = "";
    //   state.cost = "";
    // },
  },
  initialState: {
    name: "",
    cost: "",
  },
  extraReducers: (builder) => {
    builder.addCase(resetForm, (state, action) => {
      state.name = "";
      state.cost = "";
    });
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = "";
    });
  },
});

export const { updateName, updateCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
