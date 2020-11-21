import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {About, Contact, Home, Posts, NotFound} from './pages';
import Sidebar from './components/NavMenu';
import Header from './components/Header';
import Button from './components/Button';
import './App.css';

function App() {

  const [showSidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!showSidebar);
  }

  return (
    <div className="main-container">
      <Router>
        <Sidebar
          showSidebar={showSidebar}
          handleOnClick={toggleSidebar}
        />
        <div className="content-wrapper">
          <Header>
            <Button
              handleOnClick={toggleSidebar}
            >
              {showSidebar ? 'Ukryj menu' : 'Pokaż menu'}
            </Button>
          </Header>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/posts'>
              <Posts />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
