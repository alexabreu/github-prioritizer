import { ActionWithPayload } from '../utils/actionHelpers';
import ActionTypes from './actionTypes';

const initialState: State['repositories'] = {
  collection: [],
  selectedRepository: undefined,
  isLoading: false,
}

const tokens = (state = initialState, action: ActionWithPayload<ActionTypes, any>) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOSITORIES:
      return {...state, isLoading: true }; 
    case ActionTypes.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        collection: action.payload.repositories
      };
    default:
      return state;
  }
};

export default tokens;
