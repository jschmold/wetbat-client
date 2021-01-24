import * as constants from './constants';
import * as api from './api';

import { actions } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadQuotes = createAsyncThunk(
  constants.loadQuotes,
  async (_, thunk) => {
    try {
      const data = await api.loadQuotes();
      thunk.dispatch(actions.loadQuotes(data));
    } catch (err) {
      console.error(err);
    }
  }
);
