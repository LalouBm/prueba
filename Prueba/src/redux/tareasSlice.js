import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tareas: [],
  mostrarTareas: false,
  mostrarFormulario: false,
};

const tareasSlice = createSlice({
  name: 'tareas',
  initialState,
  reducers: {
    setTareas: (state, action) => {
      state.tareas = action.payload;
    },
    setMostrarTareas: (state, action) => {
      state.mostrarTareas = action.payload;
    },
    setMostrarFormulario: (state, action) => {
      state.mostrarFormulario = action.payload;
    },
  }
});

export const { setTareas, setMostrarTareas, setMostrarFormulario } = tareasSlice.actions;
export default tareasSlice.reducer;