import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ChampionshipResponse,
  ParticipatingTeam,
  WinnersResponse,
} from "@/types/championsAPI";

export const championshipApi = createApi({
  reducerPath: "championshipApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://winsapi.discloud.app/dev/",
  }),
  tagTypes: ["Championship", "Winners", "Qualifiers"],
  endpoints: (builder) => ({
    getChampionship: builder.query<ChampionshipResponse, void>({
      query: () => "/championship",
      providesTags: ["Championship"],
      transformErrorResponse: (response) => {
        console.error("Erro ao buscar campeonato:", response);
        return response;
      },
    }),
    getWinners: builder.query<WinnersResponse, void>({
      query: () => "/winners",
      providesTags: ["Winners"],
      transformErrorResponse: (response) => {
        console.error("Erro ao buscar vencedores:", response);
        return response;
      },
    }),
    getQualifiers: builder.query<ParticipatingTeam[], void>({
      query: () => "/qualifiers",
      providesTags: ["Qualifiers"],
      transformErrorResponse: (response) => {
        console.error("Erro ao buscar qualificados:", response);
        return response;
      },
    }),
  }),
});

export const {
  useGetWinnersQuery,
  useGetQualifiersQuery,
  useGetChampionshipQuery,
} = championshipApi;
