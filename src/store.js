import { configureStore } from '@reduxjs/toolkit';
import userReducer from './store/userSlice';  // Misalnya, Anda punya userSlice untuk user data

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
