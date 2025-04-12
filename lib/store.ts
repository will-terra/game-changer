import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { backgroundApi } from "./features/shared/api/backgroundAPI";

import { productsApi } from "./features/products/api/productsAPI";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [backgroundApi.reducerPath]: backgroundApi.reducer,
      [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(backgroundApi.middleware)
        .concat(productsApi.middleware);
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
