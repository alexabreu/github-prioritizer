import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import RepositoryActions from '../../../state/repositories/actions';
import { Dispatch } from 'redux';

const mapStateToProps = (state: State) => {
  const selectedRepository= state.repositories.selectedRepository;

  return {
    repositories: state.repositories.collection,
    selectedRepository,
    isLoadingIssues: state.issues.isLoading,
    hasIssues: !!(selectedRepository && state.issues.priority[selectedRepository.id].length)
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
export type WithRepositoriesProps = StateProps & DispatchProps;

const Fetcher = <T extends any, S = void>(Cmp: ComponentType<any>): ComponentType<T & WithRepositoriesProps> =>
  class extends Component<T & WithRepositoriesProps, S> {
    public componentDidMount() {
      this.props.fetchRepositories();
    }

    public render() {
      return <Cmp {...this.props} />;
    }
  };

export default <OwnProps extends any, OwnState = void>(Cmp: ComponentType<OwnProps>) =>
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps as any,
    mapDispatchToProps as any,
  )(Fetcher(Cmp));
