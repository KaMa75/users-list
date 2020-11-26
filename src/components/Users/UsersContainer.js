import React, {useEffect, useState} from 'react';
import {CircularProgress} from '@material-ui/core';

import {UsersList, UserSearch} from './';

function UsersContainer() {
    const [usersList, setUsersList] = useState();
    const [isLoading, setLoading] = useState(true);

    let timer;

    useEffect(() => {
        getData(setUsersList);
    }, []);

    const getData = (setUsers) => {
        timer = setTimeout(() => {
            fetch('users.json')
                .then(res => res.json())
                .then(data => {
                    setUsers(data);
                    setLoading(false);
                    clearTimeout(timer);
                })
                .catch(err => {
                    console.log(err);
                });
        }, 1000);
    }

    const findPhrase = (phrase, name) => {
        const pattern = new RegExp(phrase, 'i');
        return pattern.test(name);
    }

    const setFilteredUsersList = (value) => () => {
        const filteredList = usersList.filter((userData) => {
            return findPhrase(value, userData.first_name) || findPhrase(value, userData.last_name)
        });
        setUsersList(filteredList);
    }

    const findUsers = (value) => {
        setLoading(true);
        getData(setFilteredUsersList(value));
    }

    const resetUsers = () => {
        setLoading(true);
        getData(setUsersList);
    }

    return (
        <div className="userslist-container">
            <UserSearch
                findUsers={findUsers}
                resetUsers={resetUsers}
            />
            {isLoading ? <CircularProgress /> : <UsersList
                users={usersList}
            />}
        </div>
    );
}

export default UsersContainer;
