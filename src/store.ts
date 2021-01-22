import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({});

const store = createStore(rootReducer, devToolsEnhancer({}));

export default store;
