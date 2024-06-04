import { configureStore } from "@reduxjs/toolkit";
import { formsReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formsReducer,
    cars: carsReducer,
  },
});

export { store, changeName, changeCost, addCar, removeCar, changeSearchTerm };
