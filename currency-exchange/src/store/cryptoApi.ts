import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openapiv1.coinstats.app",
    headers: {
      "X-API-KEY": import.meta.env.VITE_PUBLIC_API_KEY,
    },
  }),
  endpoints: (build) => ({
    getCoins: build.query({
      query: () => ({
        url: `/coins`,
      }),
    }),
  }),
});

export const { useLazyGetCoinsQuery } = cryptoApi;
