import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { backgroundApi } from "./features/services/backgroundAPI";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";
import { productsApi } from "./features/services/productsAPI";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineSlices(counterSlice, quotesApiSlice);

export const makeStore = () => {
  return configureStore({
    reducer: {
      [backgroundApi.reducerPath]: backgroundApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(backgroundApi.middleware).concat(productsApi.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
