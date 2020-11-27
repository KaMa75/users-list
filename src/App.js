import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import UsersContainer from './components/Users';
import UserDetail from './components/UserDetail';
import './App.css';

function App() {

  const [user, setUser] = useState({});

  const handleSetUser = (user) => {
    setUser(user);
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Redirect to="/users"/>
          </Route>

          <Route exact path="/users">
            <UsersContainer
              handleSetUser={handleSetUser}
            />
          </Route>

          <Route path="/user-profile">
            <UserDetail user={user} />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
