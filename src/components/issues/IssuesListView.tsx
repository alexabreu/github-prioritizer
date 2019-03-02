import React, { Component } from 'react';
import { List, WithStyles, withStyles } from '@material-ui/core';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import cn from 'classnames';

import WithIssues, { WithIssuesProps } from './containers/WithIssues';
import IssueListItem from './IssueListItem';

import styles from './styles/ListView';

class IssuesListView extends Component<
  WithIssuesProps &
  WithStyles
> {
  public render() { 
    const { issues, priority, classes } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={cn({ [classes.hasIssues]: this.hasIssues })}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              <List>
                {
                  priority.map((id: Issue['id'], index) => 
                    <IssueListItem
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