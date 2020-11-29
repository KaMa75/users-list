import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button, Grid, List, ListItem, ListItemText, Typography} from '@material-ui/core';

import {DataNotFound} from '../EmptyStates';

function UserDetail({user}) {
    console.log(user);

    const history = useHistory();

    const handleOnClick = () => {
        history.push('/users');
    }

    const renderData = () => {
        if(user && Object.keys(user).length > 0) {
            return (
                <>
                    <Grid
                        xs={12}
                    >
                        <Typography
                            variant="h6"
                        >
                            Dane użytkownika
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={user.first_name}
                                    secondary="Imię"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={user.last_name}
                                    secondary="Nazwisko"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={user.email}
                                    secondary="E-mail"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={user.gender}
                                    secondary="Płeć"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary={user.ip_address}
                                    secondary="Adres IP"
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </>
            );
        }
        return  <DataNotFound />
    }

    return (
        <Grid
            container
        >
            {renderData()}
            <Grid
                xs={12}
            >
                <Button
                    style={{marginTop: 50}}
                    variant="outlined"
                    color="primary"
                    onClick={handleOnClick}
                >
                    Lista użytkowników
                </Button>
            </Grid>
        </Grid>


    );
}

export default UserDetail;
