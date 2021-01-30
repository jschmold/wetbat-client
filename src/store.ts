import ReduxThunk from 'redux-thunk';

import {
  IDestinationState,
  reducer as destinations,
} from 'features/destinations/reducer';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { IQuoteState, reducer as quotes } from 'features/quotes/reducer';

export interface IAppState {
  quotes: IQuoteState;
  destinations: IDestinationState;
}

/* Create root reducer, containing all features of the application */
const store = configureStore({
  reducer: combineReducers({ quotes, destinations }),
  middleware: [ReduxThunk],
});

export default store;
