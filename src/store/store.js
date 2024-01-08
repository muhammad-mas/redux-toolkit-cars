import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  resetCars,
  resetSearchTerm,
  updateSearchTerm,
} from "./slices/carsSlice";
import { formReducer, updateName, updateCost } from "./slices/formSlice";
const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});
export {
  store,
  addCar,
  removeCar,
  resetCars,
  resetSearchTerm,
  updateSearchTerm,
  updateName,
  updateCost,
};
