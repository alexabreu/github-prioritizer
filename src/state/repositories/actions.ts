import { ThunkResult, createAction } from '../utils/actionHelpers';
import ActionTypes from './actionTypes';
import Service from "./service";

const Actions = {
  fetchRepositories: (): ThunkResult<Promise<Repository[]>> => async (dispatch, getState) => {
    dispatch(createAction(ActionTypes.FETCH_REPOSITORIES, undefined));
    let repositories: Repository[] = [];

    try {
      repositories = await Service.fetchRepositories();
    } catch(error) {
      dispatch(createAction(ActionTypes.FETCH_REPOSITORIES_ERROR, { error }));
    }

    dispatch(createAction(ActionTypes.FETCH_REPOSITORIES_SUCCESS, { repositories }));

    return repositories;
  },
}

export default Actions;
