import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {UsersList, User} from './';

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
            <Switch>

                <Route exact path="/">
                    <Redirect to="/users"/>
                </Route>

                <Route path="/users">
                    {usersList && <UsersList
                        users={usersList}
                    />}
                </Route>

                <Route path="/user/:id">
                    <User />
                </Route>

            </Switch>
        </Router>
    );
}

export default UsersContainer;
