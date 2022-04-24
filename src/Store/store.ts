import { configureStore } from '@reduxjs/toolkit';
import counter from './CounterReducer/counter';
import status from './StatusReducer/status';

export const store = configureStore({
  reducer: {
    counter: counter,
    status: status
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;