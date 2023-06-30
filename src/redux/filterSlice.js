import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: { value: '' },
  // Об'єкт редюсерів
  reducers: {
    addFilter(state, action) {
      state.value = action.payload;
    },
  },
});

// Генератори екшенів
export const { addFilter } = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
