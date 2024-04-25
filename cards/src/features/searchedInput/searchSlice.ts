import { createSlice } from "@reduxjs/toolkit";
import { RootType } from "../../app/store";
const initialState = { searchInput: "" };
export const selectInput = (state: RootType) => state.search.searchInput;

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});
export const { setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
