import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzas",
    async (params) => {
      const {order, sortBy, categoryId, page, searchValue} = params
      const {data } = await axios.get(
          `https://64803a94f061e6ec4d48d979.mockapi.io/items?page=${page}&search=${searchValue}&limit=4&${categoryId}&sortBy=${sortBy}&order=${order}`
        );
      return data;
    }
  );


const initialState = {
  items: [],
  status: ''
};



export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
        state.status = 'loading';
        state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        state.status = 'success';
        state.items = action.payload
    },
    [fetchPizzas.rejected]: (state) => {
        state.status = 'error';
        state.items = []
    }
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
