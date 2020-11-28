import React, {useEffect, useState} from 'react';

import {UsersList, UserSearch, User} from './';
import Progress from '../Progress';

function UsersContainer({handleSetUser}) {
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

    const setFilteredUsersList = (value) => (data) => {
        const filteredList = data.filter((userData) => {
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

    const createBody = (data) => (
        data.map(row => {
            return (
                <User
                    key={row.id}
                    row={row}
                    handleSetUser={handleSetUser}
                />
            )
        })
    );

    return (
        <div style={{position: 'relative'}}>
            <div>
                <UserSearch
                    findUsers={findUsers}
                    resetUsers={resetUsers}
                />
            </div>
            <div>
                {isLoading ? <Progress /> : (
                <UsersList
                    users={usersList}
                    handleSetUser={handleSetUser}
                >
                    {createBody(usersList)}
                </UsersList>
                )}
            </div>
        </div>
    );
}

export default UsersContainer;
