import React, { Component, ComponentType } from 'react';
import { connect } from 'react-redux';
import IssueActions from '../../../state/issues/actions';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';

const mapStateToProps = (state: State, ownProps: RouteComponentProps<{repository_id: string}>) => {
  const repository = state.repositories.collection.find(
    (repository) => `${repository.id}` === ownProps.match.params.repository_id
  ) as Repository;

  const priority = state.issues.priority[repository.id];

  return {
    issues: state.issues.collection[repository.id],
    priority,
    isLoadingIssues: state.issues.isLoading,
    repository,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    fetchIssues: (repository: Repository) => dispatch(IssueActions.fetchIssues(repository)),
    reorderIssuePriority: (repository: Repository, startIndex: number, endIndex: number) =>
      dispatch(IssueActions.reorderIssuePriority(repository, startIndex, endIndex)),
  }
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type WithIssuesProps = StateProps & DispatchProps;

const Fetcher = <T extends any, S = void>(Cmp: ComponentType<any>): ComponentType<T & WithIssuesProps> =>
  class extends Component<T & WithIssuesProps, S> {
    public componentDidMount() {
      this.props.fetchIssues(this.props.repository);
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
