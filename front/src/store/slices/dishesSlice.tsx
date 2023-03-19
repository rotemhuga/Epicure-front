import { createSlice } from "@reduxjs/toolkit";
import {IdishesValue } from "../../interfaces";

const getData = fetch("http://localhost:8000/epicure/DishesPage")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });

const dish:any = await getData;

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    value: dish,
    valueRestDishes: dish,
    valueHomeRestDishes: dish
  },
  reducers: {
    dishesPageFilter: (state,action) => {
      switch (action.payload.type){
        case "all":
          state.value = action.payload.data;
          state.valueRestDishes =  action.payload.data;
          state.valueRestDishes = action.payload.data;
          break;
        case "breakfast":
          console.log(action.payload.data)
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isBreakfast === true);
          break;
        case "Lunch":
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isLunch === true);
          break;
        case "dinner":
          state.valueRestDishes = action.payload.data.filter(
            (dish:IdishesValue) => dish.isDinner === true);
          break;

      default:
        state.value = action.payload.data
      }
    }
  },
});

export const { dishesPageFilter } = dishesSlice.actions;
export default dishesSlice.reducer;

