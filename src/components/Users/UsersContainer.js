import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {UsersList} from './';

function UsersContainer() {
    const [usersList, setUsersList] = useState();

    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => {
                setUsersList(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/users"/>
                    </Route>
                    <Route path="/users">
                        {usersList && <UsersList
                            users={usersList}
                        />}
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default UsersContainer;
