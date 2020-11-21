import React from 'react';
import {NavLink} from 'react-router-dom';

function MenuLink({children, to}) {

    return (
        <NavLink
            activeClassName="active-button"
            exact
            to={to}
        >
            <li>
                    {children}
            </li>
        </NavLink>
    );
}

export default MenuLink;
