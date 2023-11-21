import { CardCharacterCategory } from '../types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetching } from './actionCreators';

interface StarWarsState {
  textSearch: string;
  isLoading: boolean;
  error: string;
  cards?: CardCharacterCategory[];
  countPages: number;
}

const initialState: StarWarsState = {
  textSearch: '',
  isLoading: true,
  cards: [],
  error: '',
  countPages: 0,
};

export const starWarsSlice = createSlice({
  name: 'starWars',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardCharacterCategory[]>) => {
      state.cards = action.payload;
    },
    setTextSearch: (state, action: PayloadAction<string>) => {
      state.textSearch = action.payload;
    },
    setCountPages: (state, action: PayloadAction<number>) => {
      state.countPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetching.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetching.fulfilled, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = '';
        state.cards = action.payload as CardCharacterCategory[];
      })
      .addCase(fetching.rejected, (state, action: PayloadAction<unknown>) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default starWarsSlice.reducer;
