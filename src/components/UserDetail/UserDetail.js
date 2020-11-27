import React from 'react';
import {useHistory} from 'react-router-dom';

import {Button} from '@material-ui/core';

function UserDetail({user}) {
    console.log(user);

    const history = useHistory();

    const handleOnClick = () => {
        history.goBack();
    }

    return (
        <div>
            <div>

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
