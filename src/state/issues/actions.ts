import { RepositoryActions } from './../repositories/actions';
import { ThunkResult, ActionsUnion, createAction } from '../utils/actionHelpers';
import ActionTypes from './actionTypes';
import Service from "./service";
import { push } from 'react-router-redux';

const ActionCreators = {
  fetchIssues: (repository: Repository) => 
    createAction(ActionTypes.FETCH_ISSUES, { repository }),

  fetchIssuesSuccess: (repository: Repository, issues: Issue[]) =>
    createAction(ActionTypes.FETCH_ISSUES_SUCCESS, { repository, issues }),

  fetchIssuesError: (repository: Repository, error: Error) =>
    createAction(ActionTypes.FETCH_ISSUES_ERROR, { repository, error }),

  reorderIssuePriority: (repository: Repository, startIndex: number, endIndex: number) =>
    createAction(ActionTypes.REORDER_ISSUE_PRIORITY, { repository, startIndex, endIndex })
}

export type IssueActions = ActionsUnion<typeof ActionCreators>;

export const Actions = {
  ...ActionCreators,

  fetchIssues: (repository: Repository): ThunkResult<Promise<Issue[]>> => async (dispatch, getState) => {
    let issues: Issue[] = [];

    // In the case of a hard refresh with a selected repo url and we don't have a real selected repo.
    if (!repository) {
      dispatch(push('/repos'));
      return issues;
    }

    dispatch(ActionCreators.fetchIssues(repository));

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
