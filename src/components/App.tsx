import React, { Component } from 'react';
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { MuiThemeProvider, withStyles, WithStyles} from '@material-ui/core';

import { Provider } from 'react-redux';
import store from '../state/store';

import theme from './common/Theme';

import Header from './common/Header';
import RepositoriesListView from './repositories/RepositoriesListView';
import IssuesListView from './issues/IssuesListView';

import appStyles from './AppStyles';

class App extends Component<WithStyles> {
  public render() {
    const { classes } = this.props;
    return (
      <BrowserRouter>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
              <Header/>
              <main className={classes.contentContainer}>
                <Switch>
                  <Route path="/repos" component={RepositoriesListView}/>

                  <Redirect from="/" to="/repos"/>
                </Switch>
              </main>
          </MuiThemeProvider>
        </Provider>
      </BrowserRouter >
    );
  }
}

export default withStyles(appStyles )(App);
