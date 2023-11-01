import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { gql } from 'graphql-request'

export interface Batch {
  id: string,
  name: string
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
          }
        }
      `,
        variables: {
          status
        },
      }),
      transformResponse: (response: GetBatchesResponse) : Batch [] => response.batches,
    }),
  })
});

export const { useGetBatchesQuery } = api;

// name
// batchNumber
// status
// style
// brewDate