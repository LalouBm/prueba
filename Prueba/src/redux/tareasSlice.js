import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tareas: [],
  mostrarTareas: false,
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
  }
});

export const { setTareas, setMostrarTareas } = tareasSlice.actions;
export default tareasSlice.reducer;