import React from 'react';

import {NavMenu, MenuLink} from './';
import Button from '../Button';
import './Sidebar.css';

const menuLinks = [
    {id:1, name: 'Home', linkTo: '/'},
    {id:2, name: 'About', linkTo: '/about'},
    {id:3, name: 'Contact', linkTo: '/contact'},
    {id:4, name: 'Posts', linkTo: '/posts'},
];

function Sidebar({showSidebar, handleOnClick}) {
    const links = menuLinks.map((link) => {
        const {id, name, linkTo, isActive} = link;
        return (
            <MenuLink
                key={id}
                to={linkTo}
            >
                {name}
            </ MenuLink>
        );
    });
    return showSidebar && (
            <NavMenu>
                <div className="sidebar-header">
                    <Button
                        handleOnClick={handleOnClick}
                    >
                        &lt;
                    </Button>
                </div>
                {links}
            </NavMenu>
        );
}

export default Sidebar;
