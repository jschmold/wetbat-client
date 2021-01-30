import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuote } from 'types/quote';

export interface IQuoteState {
  ids: number[];
  entities: { [key: number]: IQuote };
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: { ids: [], entities: {} } as IQuoteState,
  reducers: {
    load: (state: IQuoteState, action: PayloadAction<IQuote | IQuote[]>) => {
      const arr = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      for (const quote of arr) {
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
