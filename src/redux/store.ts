import { configureStore } from "@reduxjs/toolkit";
import filtered from "./slices/filteredSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { filtered, cart, pizza  },
});


type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>



