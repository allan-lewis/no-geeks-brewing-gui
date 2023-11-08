import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request'

export interface Batch {
  id: string,
  name: string
  status: string,
  style: string,
  batchNumber: number,
  brewDate: number
}

export interface GetBatchesResponse {
    batches: Batch []
}

export const api = createApi({
  reducerPath: 'ngb',
  baseQuery: graphqlRequestBaseQuery({
    url: '/graphql', 
  }),
  endpoints: (builder) => ({
    getBatches: builder.query<Batch [], { status: String; }>({
      query: ({ status }) => ({
        document: gql`
        query {
          batches(status: "${status}") {
            id
            name
            batchNumber
            status
            style
            brewDate
          }
        }
      `,
        variables: {
          status
        },
      }),
      transformResponse: (response: GetBatchesResponse) : Batch [] => response.batches.sort((a, b) => b.batchNumber - a.batchNumber),
    }),
  })
});

export const { useGetBatchesQuery } = api;
