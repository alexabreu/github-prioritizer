import { createAction, ThunkResult } from "../utils/actionHelpers";
import TokenActionTypes from './actionTypes';
import RepositoryActions from '../repositories/actions';
import Cookies from 'js-cookie';

const Actions = {
  addNewToken: (token: Token['token']) => createAction(TokenActionTypes.ADD_NEW_TOKEN, { token }),
  selectToken: (id: Token['id']): ThunkResult<void> => (dispatch, getState) => {
    const { collection } = getState().tokens;
    const selectedToken = collection.find((token) => token.id === id) as Token;

    // Using a cookie because it's probably more realistic that 
    // any AJAX calls would reference the cookie for authentication
    Cookies.set('github_token', selectedToken.token);

    dispatch(RepositoryActions.fetchRepositories());

    return createAction(TokenActionTypes.SELECT_TOKEN, { id });
  },
  deleteToken: (id: Token['id']) => createAction(TokenActionTypes.DELETE_TOKEN, { id }),
}

export default Actions;
