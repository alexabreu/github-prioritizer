import React, { Component } from 'react';
import { List, withStyles, WithStyles } from '@material-ui/core';
import cn from 'classnames';

import WithRepositories, { WithRepositoriesProps } from './containers/WithRepositories';
import RepositoryListItem from './RepositoryListItem';

import styles from './styles/ListView';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import IssuesListView from '../issues/IssuesListView';
 
class RepositoriesListView extends Component<
  WithRepositoriesProps &
  WithStyles &
  RouteComponentProps
> {
  public componentDidMount() {
    const { selectedRepository, history } = this.props;

    if (selectedRepository) {
      history.replace(`/repos/${selectedRepository.id}/issues`);
    }
  }

  public render() { 
    const { repositories, selectRepository, selectedRepository, isLoadingIssues, classes } = this.props;

    return (
      <>
        <List className={cn(classes.root, {[classes.hasIssues]: this.hasIssues})}>
          {
            repositories.map((repository) =>
            <RepositoryListItem
              key={repository.id}
              repository={repository}
              onSelect={selectRepository}
              selectedRepository={selectedRepository}
              isLoadingIssues={isLoadingIssues}
            />
            )
          }
        </List>
        <Route path="/repos/:repository_id/issues" component={IssuesListView} />
      </>
    );
  }

  private get hasIssues() {
    const { isLoadingIssues, hasIssues } = this.props;

    return !isLoadingIssues && hasIssues;
  }
}
 
export default withRouter(withStyles(styles)(WithRepositories(RepositoriesListView)));