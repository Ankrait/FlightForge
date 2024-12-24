import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootStateType = ReturnType<typeof store.getState>;
export type RootDispatchType = typeof store.dispatch;
