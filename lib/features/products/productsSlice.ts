import { createAppSlice } from "@/lib/createAppSlice";
import { Product, ProductType } from "./api/productsAPI";
import { PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
  selectedCategory: ProductType;
  isMobile: boolean;
}

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
  selectedCategory: "uniforms",
  isMobile: false,
};

export const productsSlice = createAppSlice({
  name: "products",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<ProductType>) => {
      state.selectedCategory = action.payload;
    },
    setMobileStatus: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});
export const {
  setItems,
  setLoading,
  setError,
  setSelectedCategory,
  setMobileStatus,
} = productsSlice.actions;
