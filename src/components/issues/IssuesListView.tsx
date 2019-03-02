import React, { Component } from 'react';
import { List, WithStyles } from '@material-ui/core';

import WithIssues, { WithIssuesProps } from './containers/WithIssues';
import IssueListItem from './IssueListItem';

export interface IssuesListViewProps {
  
}
 
class IssuesListView extends Component<
  IssuesListViewProps & 
  WithIssuesProps
> {
  public render() { 
    const { issues } = this.props;

    return (
      <List>
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
 
export default WithIssues(IssuesListView);