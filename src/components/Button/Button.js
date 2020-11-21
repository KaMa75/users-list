import React from 'react';

import './Button.css';

function Header({children, handleOnClick}) {
    // console.log(onCLick)
    return (
        <button
            onClick={handleOnClick}
        >
            {children}
        </button>
    );
}

export default Header;
