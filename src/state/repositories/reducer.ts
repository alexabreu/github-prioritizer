import ActionTypes from './actionTypes';
import { RepositoryActions } from './actions';

const initialState: State['repositories'] = {
  collection: [],
  selectedRepository: undefined,
  isLoading: false,
}

const tokens = (state = initialState, action: RepositoryActions) => {
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
