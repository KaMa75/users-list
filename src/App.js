import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import UsersContainer, {User} from './components/Users';
import './App.css';

function App() {
  return (
      <div className="App">
    {/* <Router>
        <Switch>
            <Route path="/">
                <Redirect to="/users"/>
            </Route>
            <Route path="/users">
              <UsersContainer />
              </Route>
              <Route path="/user/:id">
              <User />
            </Route>
        </Switch>
    </Router> */}
            <UsersContainer />
      </div>
  );
}

export default App;
