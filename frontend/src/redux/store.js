// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import CartSlice from "./CartSlice.js"; // adjust path if needed

// const rootReducer = combineReducers({
//   cart: CartSlice,
// });

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartSlice from "../redux/CartSlice";

export const rootReducer = combineReducers({
  cart: CartSlice,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});
const persistor = persistStore(store);

export { store, persistor };

export default store;

