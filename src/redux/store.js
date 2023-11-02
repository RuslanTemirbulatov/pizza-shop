import { configureStore } from "@reduxjs/toolkit";
import filtered from "./slices/filteredSlice";
import cart from "./slices/cartSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: { filtered, cart, pizza  },
});
