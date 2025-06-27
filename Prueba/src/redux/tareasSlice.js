import { createSlice } from '@reduxjs/toolkit';

const tareasSlice = createSlice({
  name: 'tareas',
  initialState: [],
  reducers: {
    setTareas: (state, action) => action.payload
  }
});

export const { setTareas } = tareasSlice.actions;
export default tareasSlice.reducer;