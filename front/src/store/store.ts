import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../store/slices/restaurantsSlice"
import dishesReducer from "../store/slices/dishesSlice"
import chefsReducer from "../store/slices/chefsSlice"

export default configureStore({
    reducer: {
      chefs: chefsReducer,
      restaurants: restaurantsReducer,
      dishes: dishesReducer
    },
  });
  