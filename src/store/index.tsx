import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

export const store = configureStore({
  reducer,
  devTools: window.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
