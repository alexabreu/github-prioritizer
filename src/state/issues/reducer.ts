import isEmpty from 'lodash/isEmpty';

import ActionTypes from './actionTypes';
import { IssueActions } from './actions';

const initialState: State['issues'] = {
  collection: {},
  isLoading: false,
  priority: {},
}

export const reorderIssuePriority = (priority: Issue['id'][], startIndex: number, endIndex: number) => {
  const newPriority = [...priority];

  const [ removed ] = newPriority.splice(startIndex, 1);
  newPriority.splice(endIndex, 0, removed);

  return newPriority;
}

export const normalizeIssues = (issues: Issue[]): Record<Issue['id'], Issue> => {
  const normalized : Record<Issue['id'], Issue> = {};

  return issues.reduce((memo, issue) => {
    memo[issue.id] = issue;
    return memo;
  }, normalized);
}
 
const issues = (state = initialState, action: IssueActions) => {
  switch (action.type) {
    case ActionTypes.FETCH_ISSUES:
      return {...state, isLoading: true }; 
    case ActionTypes.FETCH_ISSUES_SUCCESS:
      // This is so we can keep our locally set priority.
      // We wouldn't need this check if we were saving our priority[] back to the server.
      // If we don't have a priority[], then let's take the ordering returned by the GitHub API.
      let priority = state.priority[action.payload.repository.id];
      const hasBeenPrioritized = !isEmpty(priority);
      
      priority = hasBeenPrioritized ?
        priority :
        action.payload.issues.map((issue) => issue.id);

      return {
        ...state,
        isLoading: false,
        collection: { ...state.collection, [action.payload.repository.id]: normalizeIssues(action.payload.issues) },
        priority: { ...state.priority, [action.payload.repository.id]: priority }
      };
    case ActionTypes.FETCH_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.REORDER_ISSUE_PRIORITY:
      const { repository, startIndex, endIndex } = action.payload;
      return {
        ...state,
        priority: {
          ...state.priority, 
          [repository.id]: reorderIssuePriority(state.priority[repository.id], startIndex, endIndex)
        }
      }   
    default:
      return state;
  }
};

export default issues;
