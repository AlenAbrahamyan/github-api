import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import lightModeReducer from '../features/lightModeSlice';

export const store = configureStore({
  reducer: {
    lightMode: lightModeReducer,
    user: userReducer
  },
});
