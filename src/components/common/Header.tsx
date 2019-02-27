import React, { Component, CSSProperties } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { AppBar, Typography, Button, Toolbar, Link } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import TokenDialog from '../tokens/TokenDialog';
import styles from './styles/Header';
 
class Header extends Component<WithStyles> {
  render() {
    const { classes } = this.props;
    
    return (
      <AppBar>
        <Toolbar className={classes.root}>
          <Typography variant="h6" color="inherit">GitHub Issue Prioritizer</Typography>
          <Button
            variant="outlined" 
            color="inherit"
            component={(props: any) => <RouterLink to="?change-token" {...props}/>}
          >
            Set API Token
          </Button>
          <TokenDialog {...{} as any}/>
        </Toolbar>
      </AppBar>
    );
  }
}
 
export default withStyles(styles)(Header);
