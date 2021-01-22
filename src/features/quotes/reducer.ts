import { createSlice } from '@reduxjs/toolkit';
import { IQuote } from '../../types/quote';
import { ILoadQuotes } from './types';

export interface IQuoteState {
  ids: string[];
  entities: { [key: string]: IQuote };
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: {
    ids: [],
    entities: {},
  } as IQuoteState,
  reducers: {
    loadQuotes: (state: IQuoteState, action: ILoadQuotes) => {
      for (const quote of action.payload) {
        if (!state.ids.includes(quote.id)) {
          state.ids.push(quote.id);
        }

        state.entities[quote.id] = quote;
      }

      return state;
    },
  },
});

export const actions = quoteSlice.actions;
export const reducer = quoteSlice.reducer;
