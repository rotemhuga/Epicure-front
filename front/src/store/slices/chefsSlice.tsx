import { createSlice } from "@reduxjs/toolkit";
import { IchefsValue } from "../../interfaces";

const getChefsData = fetch("http://localhost:8000/epicure/chefsPage")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err:any) => {
        console.log(err.message);
    });

const chef:any = await getChefsData;

export const chefsSlice = createSlice({
  name: "chefs",
  initialState: {
    value: chef,
  },
  reducers: {
    chefsPageFilter: (state,action) => {
      const chefFilterType = action.payload;
        switch (chefFilterType){
          case "all":
            state.value = chef
            break;
          case "new":
            state.value = chef
            state.value = state.value.filter(
              (chef:IchefsValue) => chef.isNew === true);
            break;
          case "mostViewed":
            state.value = chef
            state.value = state.value.filter(
              (chef:IchefsValue) => chef.mostViewed === true);
            break;

          default:
          state.value = state.value;
        }
      }
  }
});

export const { chefsPageFilter } = chefsSlice.actions;
export default chefsSlice.reducer;

