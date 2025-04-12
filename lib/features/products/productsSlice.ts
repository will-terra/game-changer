import { createAppSlice } from "@/lib/createAppSlice";
import { ProductType } from "./api/productsAPI";

export const productsSlice = createAppSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    selectedCategory: "uniforms" as ProductType,
  },
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
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});
export const { setItems, setLoading, setError, setSelectedCategory } =
  productsSlice.actions;
