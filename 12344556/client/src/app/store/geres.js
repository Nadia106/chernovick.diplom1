import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    entities: null,
    isLoading: true
  }
});
