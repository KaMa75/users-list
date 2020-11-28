import React from 'react';

import './Progress.css';

import {CircularProgress} from '@material-ui/core';

function Progress() {
    return (
        <div className="progress">
            <CircularProgress />
        </div>
    );
}

export default Progress;
