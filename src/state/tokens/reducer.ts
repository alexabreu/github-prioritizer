import uuidv4 from 'uuid/v4';

import ActionTypes from './actionTypes';
import { TokenActions } from './actions';

const initialState: State['tokens'] = {
  collection: [],
  selectedToken: undefined,
}

const tokens = (state = initialState, action: TokenActions) => {
  const collection = [...state.collection];

  switch(action.type) {
    case ActionTypes.ADD_NEW_TOKEN:
      const newToken = { id: uuidv4(), token: action.payload.token };
      collection.unshift(newToken);
      return {
        ...state,
        collection,
      };
    case ActionTypes.SELECT_TOKEN:
      return {
        ...state,
        selectedToken: state.collection.find((token) => token.id === action.payload.id)
      }
    case ActionTypes.DELETE_TOKEN:
      const isDeletingSelectedToken = !!state.selectedToken && state.selectedToken.id === action.payload.id;
      return {
        ...state,
        collection: state.collection.filter((token) => token.id !== action.payload.id),
        selectedToken: isDeletingSelectedToken ? undefined : state.selectedToken
      }
    default:
      return state;
  }
};

export default tokens;
