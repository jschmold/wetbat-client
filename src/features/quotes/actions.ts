import * as constants from './constants';
import { actions } from './reducer';

import { Quotes } from '../../services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadQuotes = createAsyncThunk(
  constants.loadQuotes,
  async (_, thunk) => {
    const data = await Quotes.loadQuotes();
    thunk.dispatch(actions.loadQuotes(data));
  }
);
