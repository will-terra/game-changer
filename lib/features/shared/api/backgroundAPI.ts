import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ImageData {
  url: string;
}

export const backgroundApi = createApi({
  reducerPath: "backgroundApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getBackgroundImage: builder.query<ImageData, string>({
      queryFn: (url) => {
        return {
          data: {
            url:
              url ||
              "https://s3-alpha-sig.figma.com/img/cbc7/6430/10302b4a0bdffe2ed3f74708e153567b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eQSo-r76-6C0JhyTjhalVN8vbxZUZjDw69P1nqv~tSN9-kyckK69ANdaeiwtytEAL7vTiHALxaOVXOnDILCEwT8SegRKsRJ7oF6e48vTDJDQiCKAC0y-79tWoIOAH6DyMsZN0HvPNcRHXx3L9aZLMVRuUz0LEcq6LhY54HLTXuAtRqg3FKtDVgijig8Wn1xGx2b30u0nPg~2DQz9irV3nf~JyXYhfoEKhUlngPVkzZk0y--84163zFva7CEA2EDtr01geSNARx9vmiKYMRi46WpuoVnTEgoW2vJ3ct2Z~-QKJPuguxsM1-4NwpYxqgb6qz6AZtFvr7a81SzTczn-iw__",
          },
        };
      },
    }),
  }),
});

export const { useGetBackgroundImageQuery } = backgroundApi;
