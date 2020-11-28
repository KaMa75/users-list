import React from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';

import {DataNotFound} from '../EmptyStates';

function UserDetail({user}) {
    console.log(user);

    const history = useHistory();

    const handleOnClick = () => {
        history.push('/users');
    }

    const renderData = () => {
        if(user && Object.keys(user).length > 0) {
            return <p>są dane</p>
        }
        return  <DataNotFound />
    }

    return (
        <div>
            <div>
                {renderData()}
            </div>
            <div>
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleOnClick}
                >
                    Lista użytkowników
                </Button>
            </div>
        </div>
    );
}

export default UserDetail;
