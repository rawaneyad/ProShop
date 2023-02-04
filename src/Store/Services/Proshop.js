// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const proShopApi = createApi({
  reducerPath: 'proShopApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://prohop-express.herokuapp.com/api/' }),
  endpoints: (builder) => ({
    getProShop: builder.query({
      query: () => 'products/category/all',
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProShopQuery } = proShopApi