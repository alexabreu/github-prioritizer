import { RepositoryActions } from './../repositories/actions';
import { ThunkResult, ActionsUnion, createAction } from '../utils/actionHelpers';
import ActionTypes from './actionTypes';
import Service from "./service";

const ActionCreators = {
  fetchIssues: (repository: Repository) => 
    createAction(ActionTypes.FETCH_ISSUES, { repository }),

  fetchIssuesSuccess: (repository: Repository, issues: Issue[]) =>
    createAction(ActionTypes.FETCH_ISSUES_SUCCESS, { repository, issues }),

  fetchIssuesError: (repository: Repository, error: Error) =>
    createAction(ActionTypes.FETCH_ISSUES_ERROR, { repository, error }),

  resetIssues: () =>
    createAction(ActionTypes.RESET_ISSUES)
}

export type IssueActions = ActionsUnion<typeof ActionCreators>;

export const Actions = {
  ...ActionCreators,

  fetchIssues: (repository: Repository): ThunkResult<Promise<Issue[]>> => async (dispatch, getState) => {
    dispatch(ActionCreators.fetchIssues(repository));
    let issues: Issue[] = [];

    try {
      issues = await Service.fetchIssues(repository);
    } catch (error) {
      dispatch(ActionCreators.fetchIssuesError(repository, error));
    }

    dispatch(ActionCreators.fetchIssuesSuccess(repository, issues));

    return issues;
  },
}

export default Actions;
