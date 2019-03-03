import Cookies from 'js-cookie';

import { createAction, ThunkResult, ActionsUnion } from "../utils/actionHelpers";
import ActionTypes from './actionTypes';
import { Actions as RepositoryActions } from '../repositories/actions';
import { replace } from 'react-router-redux';


const ActionCreators = {
  addNewToken: (token: Token['token']) => createAction(ActionTypes.ADD_NEW_TOKEN, { token }),
  selectToken: (id: Token['id']) => createAction(ActionTypes.SELECT_TOKEN, { id }),
  deleteToken: (id: Token['id']) => createAction(ActionTypes.DELETE_TOKEN, { id }),
}

export type TokenActions = ActionsUnion<typeof ActionCreators>;

export const Actions = {
  ...ActionCreators,

  addNewToken: (token: Token['token']): ThunkResult<void> => (dispatch, getState) => {
    const hasSelectedToken = !!getState().tokens.selectedToken;

    if (!hasSelectedToken) {
      dispatch(ActionCreators.addNewToken(token));
      dispatch(Actions.selectToken(getState().tokens.collection[0].id));
    } else {
      return ActionCreators.addNewToken(token);
    }
  },

  selectToken: (id: Token['id']): ThunkResult<void> => (dispatch, getState) => {
    const { collection } = getState().tokens;
    const selectedToken = collection.find((token) => token.id === id) as Token;

    // Using a cookie because it's probably more realistic that 
    // any AJAX calls would reference the cookie for authentication
    Cookies.set('github_token', selectedToken.token);

    dispatch(replace('/repos'));

    dispatch(RepositoryActions.fetchRepositories());

    return ActionCreators.selectToken(id);
  },
}

export default Actions;
