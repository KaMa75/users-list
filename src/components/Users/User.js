import React from 'react';
import {useHistory} from 'react-router-dom';
import {TableRow, TableCell} from '@material-ui/core';

function User({row}) {

    const history = useHistory();

    const handleDetails = (id) => () => {
        history.push(`/user/${id}`);
    }

    return (
        <TableRow
            onClick={handleDetails(row.id)}
        >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.first_name}</TableCell>
            <TableCell>{row.last_name}</TableCell>
            <TableCell>{row.email}</TableCell>
        </TableRow>
    );
}

export default User;
