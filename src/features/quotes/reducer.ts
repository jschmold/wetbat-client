import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuote } from '../../types/quote';

export interface IQuoteState {
  ids: string[];
  entities: { [key: string]: IQuote };
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: { ids: [], entities: {} } as IQuoteState,
  reducers: {
    loadQuotes: (state: IQuoteState, action: PayloadAction<IQuote[]>) => {
      console.log(action.payload);
      if (!Array.isArray(action.payload)) {
        console.error('Payload not an array: ', action.payload);
        debugger;
      }

      for (const quote of action.payload) {
        if (!state.ids.includes(quote.oid)) {
          state.ids.push(quote.oid);
        }

        state.entities[quote.id] = quote;
      }

      return state;
    },
  },
});

export const actions = quoteSlice.actions;
export const reducer = quoteSlice.reducer;
