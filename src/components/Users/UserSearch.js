import React, {useState} from 'react';

import {Input, Button} from '@material-ui/core';

function UserSearch({findUsers, resetUsers}) {

    const [searchValue, setSearchValue] = useState('');

    const handleReset = () => {
        resetUsers();
        setSearchValue('');
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter' && searchValue) {
            findUsers(searchValue);
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form
            style={{padding: 50}}
            onSubmit={handleSubmit}
        >
            <Input
                value={searchValue}
                style={{marginRight: 25, minWidth: 500}}
                placeholder="Wyszukaj po imieniu i nazwisku"
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            <Button
                onClick={handleReset}
                disabled={!searchValue}
            >
                Reset
            </Button>
        </form>
    );
}

export default UserSearch;
