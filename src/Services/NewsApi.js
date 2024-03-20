import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
    'X-RapidAPI-Key': '21cea513b7mshbd65264e75dff77p1a6f3ajsnef07c6c65bb0',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com',
    "x-ratelimit-requests-limit": "10"
  };

  const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

  const createRequest = (url) =>({url, headers: newsApiHeaders});

  export const newsApi = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews : builder.query({
          query: (count) => createRequest(`/v1/bsc?limit=${count}`)
        }),
    }),
  });

  export const { useGetCryptoNewsQuery } = newsApi;