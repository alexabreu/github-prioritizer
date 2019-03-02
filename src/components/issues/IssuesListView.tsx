import React, { Component } from 'react';
import { List, WithStyles, withStyles } from '@material-ui/core';
import cn from 'classnames';

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
      <List className={cn({[classes.hasIssues]: this.hasIssues})}>
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

  private get hasIssues() {
    const { issues } = this.props;

    return !!issues.length;
  }
}
 
export default withStyles(styles)(WithIssues(IssuesListView));