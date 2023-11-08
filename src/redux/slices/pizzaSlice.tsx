import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    "pizza/fetchPizzas",
    async (params) => {
      const {order, sortBy, categoryId, page, searchValue} = params
      const {data } = await axios.get<Pizza[]>(
          `https://64803a94f061e6ec4d48d979.mockapi.io/items?page=${page}&search=${searchValue}&limit=4&${categoryId}&sortBy=${sortBy}&order=${order}`
        );
      return data;
    }
  );


enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type Pizza = {
  id: string,
  imageUrl: string,
  title: string,
  types: number[],
  sizes: number[],
  price: number,
  category: number,
  ratting: number,
}

interface PizzaSlice {
  items: Pizza[],
  status: 'loading' | 'success' | 'error';
}

const initialState: PizzaSlice = {
  items: [],
  status: 'loading'
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Pizza[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.LOADING;
      state.items = []
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = []
    });
  },
});

export const selectPizzas = (state: RootState) => state.pizza
export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
