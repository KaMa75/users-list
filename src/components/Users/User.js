import React from 'react';
import {TableRow, TableCell} from '@material-ui/core';

import {useHistory} from 'react-router-dom';

function User({row, handleSetUser}) {

    const history = useHistory();

    const handleOnClick = () => {
        handleSetUser(row);
        history.push('/user-profile');
    }

    return (
        <TableRow
            onClick={handleOnClick}
        >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
            <TableCell>{row.email}</TableCell>
        </TableRow>
    );
}

export default User;
