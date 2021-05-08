import { createSlice } from '@reduxjs/toolkit';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};
const slice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
  },
});

export const exampleReducer = slice.reducer;
export const exampleActions = slice.actions;
