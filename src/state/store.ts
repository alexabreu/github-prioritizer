import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux'
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

export const configureStore = (history: any) => {
  const store = createStore(rootReducer, localStorageState, applyMiddleware(thunk, routerMiddleware(history)));

  store.subscribe(
    throttle(() => saveState(store.getState()), 1000)
  );

  return store;
}
