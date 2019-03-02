import React, { Component } from 'react';
import moment from 'moment';
import { Draggable } from 'react-beautiful-dnd';

import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, withStyles, WithStyles } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

import styles from './styles/ListItem';

export interface IssueListItemProps {
  issue: Issue;
  index: number;
}

class IssueListItem extends Component<IssueListItemProps & WithStyles> {
  public render() {
    const { issue, classes, index } = this.props;

    return (
      <Draggable key={issue.id} draggableId={`${issue.id}`} index={index}>
        {(provided, snapshot) => (
          <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
            <ListItem
              component="div"
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
          </div>
        )}
      </Draggable>
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
      <span className={classes.secondaryText}>
        <span className={classes.createdAt}>{this.createdAtText}</span>
        <Typography className={classes.body} component="span" color="textPrimary">{issue.body}</Typography>
      </span>
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
