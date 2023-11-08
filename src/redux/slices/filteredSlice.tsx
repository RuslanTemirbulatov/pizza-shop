import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../store';

type Sort = {
  name: string, sortProperty: 'rating' | '-rating' | 'price' | '-price' | 'title'| '-title' 
}

interface FilterSlice {
  category: number,
  page: number,
  searchValue: string,
  sort: Sort,
}

const initialState: FilterSlice = {
  category: 0,
  page: 1,
  searchValue: "",
  sort: { name: "популярности", sortProperty: 'rating' },
};

export const filteredSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSort: (state, action: PayloadAction<Sort>) => {
      state.sort = action.payload;
    },
  },
});

export const selectFilter = (state: RootState) => state.filtered;

// Action creators are generated for each case reducer function
export const { setCategoryId, setCurrentPage, setSearchValue, setSort } = filteredSlice.actions;
export default filteredSlice.reducer;
