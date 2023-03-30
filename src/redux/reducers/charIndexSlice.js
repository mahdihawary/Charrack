import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const getChars = createAsyncThunk("users/users", () => {
  fetch("http://localhost:3000/api/v1/spells")
    .then((resp) => resp.json())
    .then((data) => {
      dispatch({ type: "fetchSpells", payload: data.data });
    });
});

const charIndexSlice = createSlice({
  name: "charIndex",
  initialState,
  reducers: {
    getCharacters(action, state) {},
  },
});
