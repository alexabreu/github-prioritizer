import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/common/Header';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './components/common/Theme';
import { Provider } from 'react-redux';
import store from './state/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <main>
            <BrowserRouter>
              <Route path="/" component={Header}/>
            </BrowserRouter>
          </main>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
