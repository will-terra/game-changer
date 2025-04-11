import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { api } from "./features/services/backgroundAPI";
import { counterSlice } from "./features/counter/counterSlice";
import { quotesApiSlice } from "./features/quotes/quotesApiSlice";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineSlices(counterSlice, quotesApiSlice);

export const makeStore = () => {
  return configureStore({
    reducer: { [api.reducerPath]: api.reducer },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(api.middleware);
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
