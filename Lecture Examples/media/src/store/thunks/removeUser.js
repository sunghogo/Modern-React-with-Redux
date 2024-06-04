import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // reponse.data will not always contain the information that the reducer needs to run correctly (in this case reponse payload is an empty object)
  return user;
});

export { removeUser };
