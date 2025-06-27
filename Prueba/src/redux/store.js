import { configureStore } from '@reduxjs/toolkit';
import usuariosReducer from './usuariosSlice';
import postsReducer from './postsSlice';
import tareasReducer from './tareasSlice';

export const store = configureStore({
  reducer: {
    usuarios: usuariosReducer,
    posts: postsReducer,
    tareas: tareasReducer
  }
});