import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import {User} from './';

const columns = [
    {id: 'id', label: 'ID', minWidth: 20},
    {id: 'name', label: 'Imię', minWidth: 100},
    {id: 'surname', label: 'Nazwisko', minWidth: 150},
    {id: 'email', label: 'E-mail', minWidth: 150}
];

const createHeader = (data) => (
    data.map(column => {
        return (
            <TableCell
                key={column.id}
                style={{minWidth: column.minWidth}}
            >
                {column.label}
            </TableCell>
        )
    })
);

const createBody = (data) => (
    data.map(row => {
        return (
            <User
                key={row.id}
                row={row}
            />
        )
    })
);


function UsersList({users}) {

    return (

        <TableContainer
            style={{maxWidth: 1000, padding: 50}}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        { createHeader(columns) }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createBody(users)}
                </TableBody>
            </Table>
        </TableContainer>

    );

}

export default UsersList;
