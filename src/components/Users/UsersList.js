import React from 'react';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button } from '@material-ui/core';

const columns = [
    {id: 'id', label: 'ID', minWidth: 20},
    {id: 'name', label: 'Imię', minWidth: 100},
    {id: 'surname', label: 'Nazwisko', minWidth: 150},
    {id: 'email', label: 'E-mail', minWidth: 150},
    {id: 'action', label: '', minWidth: 30}
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
            <TableRow
                key={row.id}
            >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                    <Button
                        color="primary"
                        onClick={handleOnClick(row.id)}
                    >
                        Szczegóły
                    </Button>
                </TableCell>
            </TableRow>
        )
    })
);

const handleOnClick = (id) => () => {
    console.log(id)
}

function UsersList({users}) {

    const renderTable = () => {
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

    return renderTable();

}

export default UsersList;
