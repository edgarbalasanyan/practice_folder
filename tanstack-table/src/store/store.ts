import { configureStore } from '@reduxjs/toolkit'
import { eSportsCoreApi } from './eSports'
// Or from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [eSportsCoreApi.reducerPath]: eSportsCoreApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eSportsCoreApi.middleware),
})