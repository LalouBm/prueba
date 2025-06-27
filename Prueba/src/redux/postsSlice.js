import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  posts: [],
  mostrarPosts: false,
};
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setMostrarPosts: (state, action) => {
      state.mostrarPosts = action.payload;
    },
  }
});

export const { setPosts, setMostrarPosts } = postsSlice.actions;
export default postsSlice.reducer;