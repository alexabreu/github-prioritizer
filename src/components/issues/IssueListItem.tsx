import React, { Component } from 'react';

import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';


export interface IssueListItemProps {
  issue: Issue;
}

class IssueListItem extends Component<IssueListItemProps> {
  public render() {
    const { issue } = this.props;

    return (
      <ListItem
        alignItems="flex-start"
      >
        {this.renderAssignee()}
        <ListItemText
          primary={issue.title}
          secondary={issue.created_at}
        />
        <ListItemText
          secondary={issue.updated_at}
        />
      </ListItem>
    );
  }

  private renderAssignee() {
    const { issue } = this.props;

    let { login, avatar_url: avatarUrl } = issue.assignee || {login: 'Unasssigned', avatar_url: ''} as Owner; 
    

    return (
      <ListItemAvatar>
        { 
          avatarUrl ? 
          <Avatar alt={login} title={login} src={avatarUrl} /> :
            <Avatar alt={login} title={login}>
            <FaceIcon />
          </Avatar>
        }
      </ListItemAvatar>
    )
  }
}

export default IssueListItem;
