import React, { Component } from 'react';
import { createRoutes } from './routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'normalize.css';
import './App.less';

let routes = createRoutes();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-container">
              {routes.map(r => <Route key={r.path} {...r} />)}  
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
