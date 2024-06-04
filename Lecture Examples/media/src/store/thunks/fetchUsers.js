import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Action type: users/fetch/pending OR fulfilled OR rejected
// These action types can be accessed from a thunk function as properties: fetchUsers.pending, fetchUsers.fulfilled, fetchUsers.rejected
// Fulfilled data is returned as the action.payload while error is returned as action.error
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // DEV ONLY!!!!
  await pause(1000);

  return response.data;
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
