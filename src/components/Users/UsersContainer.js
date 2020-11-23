import React, {useEffect, useState} from 'react';

function UsersContainer() {
    const [usersList, setUsersList] = useState();

    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
    });

    console.log(usersList);

    return (
        <div>
            User
        </div>
    );
}

export default UsersContainer;
