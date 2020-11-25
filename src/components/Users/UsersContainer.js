import React, {useEffect, useState} from 'react';


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
        <div>
            {usersList && <UsersList
                users={usersList}
            />}
        </div>
    );
}

export default UsersContainer;
