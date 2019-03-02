import ActionTypes from './actionTypes';
import { IssueActions } from './actions';

const initialState: State['issues'] = {
  collection: {},
  isLoading: false,
  priority: {},
}

const issues = (state = initialState, action: IssueActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_ISSUES:
      return {...state, isLoading: true }; 
    case ActionTypes.FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collection: { ...state.collection, [action.payload.repository.id]: action.payload.issues },
        priority: { ...state.priority, [action.payload.repository.id]: action.payload.issues.map((issue) => issue.id) }
      };
    case ActionTypes.FETCH_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default issues;
