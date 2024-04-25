import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Team {
    club_name:string,
    won:number,
    lost:number,
}
export const eSportsCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),

  endpoints: (builder) => ({
    getTeams: builder.query<Team[], void>({
      query: () => '/teams',
    }),
  }),
});

export const { useGetTeamsQuery } = eSportsCoreApi