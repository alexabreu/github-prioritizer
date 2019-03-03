import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import cn from 'classnames';

import { withStyles, WithStyles } from '@material-ui/core';

import styles from './styles/ListItem';
import IssueListItem from './IssueListItem';

export interface DraggableIssueListItemProps {
  issue: Issue;
  index: number;
}

class DraggableIssueListItem extends Component<DraggableIssueListItemProps & WithStyles> {
  public render() {
    const { issue, index } = this.props;

    return (
      <Draggable key={issue.id} draggableId={`${issue.id}`} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={this.getClassName(snapshot.isDragging)}
          >
            <IssueListItem issue={issue}/>
          </div>
        )}
      </Draggable>
    );
  }

  private getClassName = (isDragging: boolean) => {
    const { classes } = this.props;
    
    return cn(classes.root, { [classes.isDragging]: isDragging });
  }
}

export default withStyles(styles)(DraggableIssueListItem);
