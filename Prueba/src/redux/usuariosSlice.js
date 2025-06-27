import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usuarios: [],
  idUsuarioSeleccionado: null,
};

const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState,
  reducers: {
    setUsuarios: (state, action) => {
      state.usuarios = action.payload;
    },
    setIdUsuarioSeleccionado: (state, action) => {
      state.idUsuarioSeleccionado = action.payload;
    },
  }
});

export const { setUsuarios, setIdUsuarioSeleccionado } = usuariosSlice.actions;
export default usuariosSlice.reducer;