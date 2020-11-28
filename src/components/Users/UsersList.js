import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import { DataNotFound } from '../EmptyStates';

const columns = [
    {id: 'id', label: 'ID', minWidth: 20},
    {id: 'name', label: 'Imię', minWidth: 100},
    {id: 'surname', label: 'Nazwisko', minWidth: 150},
    {id: 'email', label: 'E-mail', minWidth: 150}
];

function UsersList({children, users}) {

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

    const renderUserList = () => {
        if(users && users.length > 0) {
            return (
                <TableContainer
                    style={{maxWidth: 1000}}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                { createHeader(columns) }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {children}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }

        return <DataNotFound />
    }

    return renderUserList();

}

export default UsersList;
