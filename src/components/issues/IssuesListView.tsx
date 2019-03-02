import React, { Component } from 'react';
import { List, WithStyles, withStyles } from '@material-ui/core';

import WithIssues, { WithIssuesProps } from './containers/WithIssues';
import IssueListItem from './IssueListItem';

import styles from './styles/ListView';

export interface IssuesListViewProps {
  
}
 
class IssuesListView extends Component<
  IssuesListViewProps & 
  WithIssuesProps &
  WithStyles
> {
  public render() { 
    const { issues, classes } = this.props;

    return (
      <List className={classes.root}>
        {
          issues.map((issue) =>
          <IssueListItem
            key={issue.id}
            issue={issue}
          />
          )
        }
      </List>
    );
  }
}
 
export default withStyles(styles)(WithIssues(IssuesListView));