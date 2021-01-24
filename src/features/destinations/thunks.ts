import * as constants from './constants';
import * as api from './api';
import { actions } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadDestinations = createAsyncThunk(
  constants.loadDestinations,
  async (_, thunk) => {
    try {
      const data = await api.loadDestinations();
      thunk.dispatch(actions.loadDestinations(data));
    } catch (err) {
      console.error(err);
    }
  }
);
