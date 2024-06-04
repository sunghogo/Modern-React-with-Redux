import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    // reducer refers the big reducer object holding all the smaller reducers functions
    // dispatch calls the action type to each of these reducer objects
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store };
// Re-export action creator functions for centralized dispatching
export { reset, addSong, removeSong, addMovie, removeMovie };

// Lecture Examples
/* 
const startingState = store.getState();
console.log(JSON.stringify(startingState));

// store.dispatch({
//   type: "song/addSong",
//   payload: "New Song!!!"
// });

store.dispatch(songsSlice.actions.addSong("Some Song!"));

const finalState = store.getState();
console.log(JSON.stringify(finalState));

// These functions are NOT the same as the functions in the createSlice
// These are action creator functions with the same name as above that returns an action object for easy dispatch
// console.log(songsSlice.actions.addSong("Some song!")); 
*/
