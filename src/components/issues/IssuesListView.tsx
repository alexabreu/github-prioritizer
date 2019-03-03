import React, { Component } from 'react';
import { List, WithStyles, withStyles, Typography } from '@material-ui/core';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import InfoIcon from '@material-ui/icons/Info';
import cn from 'classnames';

import WithIssues, { WithIssuesProps } from './containers/WithIssues';
import DraggableIssueListItem from './DraggableIssueListItem';

import styles from './styles/ListView';

class IssuesListView extends Component<
  WithIssuesProps &
  WithStyles
> {
  public render() { 
    const { issues, priority, classes } = this.props;

    if (!priority.length) { return null; }

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={this.getClassName(snapshot.isDraggingOver)}
            >
              <Typography variant="caption" className={classes.reorderingHelperText}>
                <InfoIcon className={classes.reorderingHelperIcon} color="secondary"/>
                Drag &amp; drop issues to reorder their priority.
              </Typography>
              <List>
                {
                  priority.map((id: Issue['id'], index) => 
                    <DraggableIssueListItem
                      key={id}
                      issue={issues[id]}
                      index={index}
                    />
                    )
                  }
              </List>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  private getClassName = (isDraggingOver: boolean) => {
    const { classes } = this.props;

    return cn(classes.root, { [classes.isDraggingOver]: isDraggingOver, [classes.hasIssues]: this.hasIssues });
  }

  private onDragEnd = (result: DropResult) => {
    const { reorderIssuePriority, repository } = this.props;

    if (!result.destination) {
      return;
    }

    reorderIssuePriority(repository, result.source.index, result.destination.index);
  }

  private get hasIssues() {
    const { priority } = this.props;

    return !!priority.length;
  }
}
 
export default withStyles(styles)(WithIssues(IssuesListView));