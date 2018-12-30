import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import routes from './routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))
        }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
