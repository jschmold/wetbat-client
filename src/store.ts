import ReduxThunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { reducer as quotes } from './features/quotes/reducer';

/* Create root reducer, containing all features of the application */
const store = configureStore({
  reducer: combineReducers({ quotes }),
  middleware: [ReduxThunk],
});

export default store;
