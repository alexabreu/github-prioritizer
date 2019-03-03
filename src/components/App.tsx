import React, { Component } from 'react';
import { Route, Redirect, Switch, Router } from "react-router-dom";
import { MuiThemeProvider, withStyles, WithStyles} from '@material-ui/core';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import { configureStore } from '../state/store';

import theme from './common/Theme';

import Header from './common/Header';
import RepositoriesListView from './repositories/RepositoriesListView';

import appStyles from './AppStyles';

const history = createBrowserHistory();
const store = configureStore(history);

class App extends Component<WithStyles> {
  public render() {
    const { classes } = this.props;
    return (
      <Router history={history}>
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
      </Router>
    );
  }
}

export default withStyles(appStyles )(App);
