import ActionTypes from './actionTypes';
import { RepositoryActions } from './actions';

const initialState: State['repositories'] = {
  collection: [],
  selectedRepository: undefined,
  isLoading: false,
}

const repositories = (state = initialState, action: RepositoryActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_REPOSITORIES:
      return {...state, isLoading: true }; 
    case ActionTypes.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collection: action.payload.repositories
      };
    case ActionTypes.FETCH_REPOSITORIES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.SELECT_REPOSITORY:
      return {
        ...state,
        selectedRepository: state.collection.find((repository) => repository.id === action.payload.id)
      }
    default:
      return state;
  }
};

export default repositories;
