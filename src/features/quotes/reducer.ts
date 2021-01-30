import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuote } from 'types/quote';

export interface IQuoteState {
  ids: number[];
  entities: { [key: number]: IQuote };
}

function load(state: IQuoteState, action: PayloadAction<IQuote | IQuote[]>) {
  const arr = Array.isArray(action.payload) ? action.payload : [action.payload];
  const { entities } = state;

  arr.forEach((quote) => {
    if (!state.ids.includes(quote.id)) {
      state.ids.push(quote.id);
    }

    entities[quote.id] = quote;
  });

  return state;
}

const quoteSlice = createSlice({
  name: 'quotes',
  initialState: { ids: [], entities: {} } as IQuoteState,
  reducers: { load },
});

export const { actions, reducer } = quoteSlice;
