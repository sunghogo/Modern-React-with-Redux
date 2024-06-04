import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
    // reset(state, action) {
    //   return [];
    // }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => []);
  }
});

// Export action creator functions for easy dispatch
export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
