import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InitialState, Join } from './chat.types';

/* -------------------------------------------------------------------------- */

const initialState: InitialState = {
  name: '',
  room: '',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    join: (state, action: PayloadAction<Join>) => action.payload,
    clear: () => initialState,
  },
});

export const { join, clear } = chatSlice.actions;

export const chatReducer = chatSlice.reducer;
