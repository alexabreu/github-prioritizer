import React, { Component } from 'react';
import { Card, CardContent, Avatar, Typography, WithStyles, withStyles } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';

import styles from './styles/EmptyState';

export interface EmptyStateProps {
  text: string; 
}
 
class EmptyState extends Component<EmptyStateProps & WithStyles> {
  render() {
    const { text, classes } = this.props;

    return (  
      <Card className={classes.root}>
        <CardContent className={classes.emptyStateCardContent}>
          <Avatar className={classes.emptyStateCardIcon}>
            <WarningIcon />
          </Avatar>
          <Typography variant="subheading">{text}</Typography>
        </CardContent>
      </Card>
    );
  }
}
 
export default withStyles(styles)(EmptyState);