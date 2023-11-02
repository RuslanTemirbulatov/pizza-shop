import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  page: 1,
  searchValue: "",
  sort: { name: "популярности", sortProperty: "rating" },
};

export const filteredSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setCurrentPage, setSearchValue, setSort } = filteredSlice.actions;
export default filteredSlice.reducer;
