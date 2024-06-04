import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  // name refers to unique name for slice
  name: "song",
  // initial state sets up the value in the store object for the property referred to by this slice ("songs")
  initialState: [],
  reducers: {
    // 'song' + '/' + 'addSong' = 'song/addSong'
    addSong(state, action) {
      // state is NOT the big state object managed by the store
      // it is the piece of state managed by this reducer
      state.push(action.payload);
    },
    // 'song/removeSong'
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    }
  },
  // extraReducers(builder) {
  //   // The first argument does not need be the exact type string value, it can be the Action Creator function for that reducer
  //   builder.addCase(moviesSlice.actions.reset, (state, action) => {
  //     return [];
  //   });
  // }
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => []);
  }
});

// Export action creator functions for easy dispatch
export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
