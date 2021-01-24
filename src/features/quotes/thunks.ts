import * as constants from './constants';
import * as api from './api';

import { actions } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateQuote } from './types';

export const loadQuotes = createAsyncThunk(
  constants.loadQuotes,
  async (_, thunk) => {
    try {
      const data = await api.loadQuotes();
      thunk.dispatch(actions.load(data));
    } catch (err) {
      console.error(err);
    }
  }
);

export const createQuote = createAsyncThunk(
  constants.createQuote,
  async (arg: ICreateQuote, thunk) => {
    try {
      const data = await api.createQuote(arg);
      thunk.dispatch(actions.load(data));
    } catch (err) {
      console.error(err);
    }
  }
);
