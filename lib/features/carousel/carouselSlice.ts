import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CarouselItem {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
}

export interface CarouselItemWithRender extends CarouselItem {
  render: (isActive: boolean) => React.ReactNode;
}

interface CarouselState {
  activeItemId: string | null;
  activeIndex: number;
  items: CarouselItem[];
}

const initialState: CarouselState = {
  items: [],
  activeItemId: null,
  activeIndex: 0,
};

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<any[]>) => {
      // Converter os itens de entrada para o formato seguro
      // preservando apenas dados serializáveis
      state.items = action.payload.map((item, index) => {
        // Extrair apenas as propriedades serializáveis que você precisa armazenar
        const { render, ...serializableProps } = item;

        return {
          ...serializableProps,
          id: `item-${index + 1}`,
        };
      });
    },
    setActiveItemId: (state, action: PayloadAction<string>) => {
      state.activeItemId = action.payload;
      // Atualizar o activeIndex com base no ID
      const idParts = action.payload.split("-");
      if (idParts.length > 1) {
        const index = parseInt(idParts[1], 10) - 1;
        state.activeIndex = index;
      }
    },
  },
});
export const { setItems, setActiveItemId } = carouselSlice.actions;

export const selectActiveItemId = (state: { carousel: CarouselState }) =>
  state.carousel.activeItemId;
export const selectActiveIndex = (state: { carousel: CarouselState }) =>
  state.carousel.activeIndex;
export const selectItems = (state: { carousel: CarouselState }) =>
  state.carousel.items;

export default carouselSlice.reducer;
