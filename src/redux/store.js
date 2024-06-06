import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
