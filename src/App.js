import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import UsersContainer from './components/Users';
import UserDetail from './components/UserDetail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Redirect to="/users"/>
          </Route>

          <Route exact path="/users">
            <UsersContainer />
          </Route>

          <Route path="/user/:id">
            <UserDetail />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
