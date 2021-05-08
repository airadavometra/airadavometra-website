---
to: src/store/slices/<%= name %>.ts
---
import { createSlice } from '@reduxjs/toolkit';

interface State {
}

const initialState: State = {
};

const slice = createSlice({
  name: '<%= name %>',
  initialState,
  reducers: {
  },
});

export const <%= name %>Reducer = slice.reducer;
export const <%= name %>Actions = slice.actions;
