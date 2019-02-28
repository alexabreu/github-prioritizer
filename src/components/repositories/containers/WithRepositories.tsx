import { ComponentType } from 'react';
import { connect } from 'react-redux';
import RepositoryActions from '../../../state/repositories/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => {
  return {
    repositories: state.repositories.collection,
    selectedRepository: state.repositories.selectedRepository
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchRepositories: () => dispatch(RepositoryActions.fetchRepositories()),
    selectRepository: (id: Repository['id']) => dispatch(RepositoryActions.selectRepository(id)),
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type WithrepositoriesProps = StateProps & DispatchProps;

export default <OwnProps extends any, OwnState = void>(Cmp: ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps as any,
    mapDispatchToProps as any,
  )(Cmp);
