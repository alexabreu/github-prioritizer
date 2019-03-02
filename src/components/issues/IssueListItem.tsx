import React, { Component } from 'react';
import moment from 'moment';

import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, withStyles, WithStyles } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import styles from './styles/ListItem';

export interface IssueListItemProps {
  issue: Issue;
}

class IssueListItem extends Component<IssueListItemProps & WithStyles> {
  public render() {
    const { issue, classes } = this.props;

    return (
      <ListItem
        alignItems="flex-start"
      >
        {this.renderAssignee()}
        <ListItemText
          primary={issue.title}
          secondary={this.renderSecondaryText()}
        />
        <ListItemText
          className={classes.updatedAt}
          secondary={this.updatedAtText}
        />
      </ListItem>
    );
  }

  private get createdAtText() {
    const { issue } = this.props;
    const date = moment(issue.created_at).format('MM/DD/YYYY');

    return `Created on: ${date}`;
  }

  private get updatedAtText() {
    const { issue } = this.props;
    const relativeDate = moment(issue.updated_at).fromNow();

    return `Updated ${relativeDate}.`;
  }

  private renderSecondaryText() {
    const { issue, classes } = this.props;
    return (
      <p className={classes.secondaryText}>
        <span className={classes.createdAt}>{this.createdAtText}</span>
        <Typography className={classes.body} component="span" color="textPrimary">{issue.body}</Typography>
      </p>
    )
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

export default withStyles(styles)(IssueListItem);
