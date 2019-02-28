import { ActionsUnion } from './../utils/actionHelpers';
import { ThunkResult, createAction } from '../utils/actionHelpers';
import ActionTypes from './actionTypes';
import Service from "./service";

const ActionCreators = {
  selectRepository: (id: Repository['id']) =>
    createAction(ActionTypes.SELECT_REPOSITORY, { id }),

  fetchRepositories: () => 
    createAction(ActionTypes.FETCH_REPOSITORIES),

  fetchRepositoriesSuccess: (repositories: Repository[]) =>
    createAction(ActionTypes.FETCH_REPOSITORIES_SUCCESS, { repositories }),

  fetchRepositoriesError: (error: Error) =>
    createAction(ActionTypes.FETCH_REPOSITORIES_ERROR, { error }),
}

export type RepositoryActions = ActionsUnion<typeof ActionCreators>;

export const Actions = {
  ...ActionCreators,

  fetchRepositories: (): ThunkResult<Promise<Repository[]>> => async (dispatch, getState) => {
    dispatch(ActionCreators.fetchRepositories());
    let repositories: Repository[] = [];

    try {
      repositories = await Service.fetchRepositories();
    } catch (error) {
      dispatch(ActionCreators.fetchRepositoriesError(error));
    }

    dispatch(ActionCreators.fetchRepositoriesSuccess(repositories));

    return repositories;
  },
}

export default Actions;
