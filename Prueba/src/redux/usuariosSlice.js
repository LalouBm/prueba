import { createSlice } from '@reduxjs/toolkit';

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: [],
  reducers: {
    setUsuarios: (state, action) => action.payload
  }
});

export const { setUsuarios } = usuariosSlice.actions;
export default usuariosSlice.reducer;