import React from 'react';
import {useHistory} from 'react-router-dom';

import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Button, Input } from '@material-ui/core';

const columns = [
    {id: 'id', label: 'ID', minWidth: 20},
    {id: 'name', label: 'Imię', minWidth: 100},
    {id: 'surname', label: 'Nazwisko', minWidth: 150},
    {id: 'email', label: 'E-mail', minWidth: 150},
    {id: 'action', label: '', minWidth: 30}
];


function UsersList({users}) {

    const history = useHistory();

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
                            onClick={handleDetails(row.id)}
                        >
                            Szczegóły
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })
    );

    const handleDetails = (id) => () => {
        history.push(`/user/${id}`);
    }

    const handleReset = () => {
        console.log('reset')
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            console.log('enter', e.target.value);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="userslist-container">
            <form
                style={{padding: 50}}
                onSubmit={handleSubmit}
            >
                <Input
                    style={{marginRight: 25, minWidth: 500}}
                    placeholder="Wyszukaj po imieniu i nazwisku"
                    onChange={handleChange}
                    onKeyDown={handleEnter}
                />
                <Button
                    onClick={handleReset}
                >
                    Reset
                </Button>
            </form>
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
        </div>
    );

}

export default UsersList;
