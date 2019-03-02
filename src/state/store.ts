import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import tokens from './tokens/reducer';
import repositories from './repositories/reducer';
import issues from './issues/reducer';
import { loadState, saveState } from "./utils/stateStorage";

const localStorageState = loadState();

const rootReducer = combineReducers<State>({
  tokens,
  repositories,
  issues
});

const store = createStore(rootReducer, localStorageState, applyMiddleware(thunk));

store.subscribe(
  throttle(() => saveState(store.getState()), 1000)
);

export default store;
