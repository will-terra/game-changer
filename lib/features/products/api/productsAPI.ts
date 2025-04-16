import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ProductType = "peds" | "uniforms" | "weapons";

export interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  description?: string;
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://winsapi.discloud.app/dev/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductType>({
      query: (productType) => {
        if (!["peds", "uniforms", "weapons"].includes(productType)) {
          throw new Error(`Tipo de produto inválido: ${productType}`);
        }
        return `/${productType}`;
      },
      transformResponse: (response: Product[], meta, arg: ProductType) => {
        if (!Array.isArray(response)) return [];

        return response.map((product) => ({
          ...product,
          images: product.images.map(
            (image) =>
              `https://wins.company/assets/TesteFrontEnd/${arg}/${image}.webp`,
          ),
        }));
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
