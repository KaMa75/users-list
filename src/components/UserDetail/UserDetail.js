import React from 'react';
import {useParams, useHistory} from 'react-router-dom';

import {Button} from '@material-ui/core';

function UserDetail() {
    const {id} = useParams();
    const history = useHistory();

    const handleOnClick = () => {
        history.goBack();
    }

    return (
        <div>
            <div>
                {id}
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
