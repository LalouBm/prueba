import { configureStore } from '@reduxjs/toolkit';
import usuariosReducer from './usuariosSlice';
import postsReducer from './postsSlice';

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
    posts: postsReducer
  }
});