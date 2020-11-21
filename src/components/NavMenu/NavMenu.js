import React from 'react';

function NavMenu({children}) {
    return (
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    );
}

export default NavMenu;
