import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://3.141.23.218:5000/interview/" }),
  refetchOnMountOrArgChange: 30,
  endpoints: (builder) => ({
    searchByPhrase: builder.query({
      query: (body) => ({
        url: `keyword_search`,
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useSearchByPhraseQuery } = searchApi;
