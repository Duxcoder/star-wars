import { GetCardPageType, GetCardsPagesType, RequestAnswerType } from '../types';
import { API_SERVICE_URL } from '../settings';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const APICards = createApi({
  reducerPath: 'APICards',
  baseQuery: fetchBaseQuery({ baseUrl: API_SERVICE_URL }),
  endpoints: (build) => ({
    fetchAllCards: build.query<RequestAnswerType, GetCardsPagesType>({
      query: ({ category, text, startPage, cardsPerPage }: GetCardsPagesType) =>
        `/${category}/?page=${startPage}&pageSize=${cardsPerPage}&name=${text}`,
    }),
    fetchCard: build.query<RequestAnswerType, GetCardPageType>({
      query: ({ category, id }: GetCardPageType) => `/${category}/${id}`,
    }),
  }),
});
