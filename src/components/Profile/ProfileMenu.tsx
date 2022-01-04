import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeMenu, openMenu, selectAnchorElement } from './ProfileMenuSlice';

const menuId = 'primary-search-account-menu';

const ProfileMenu = () => {
    const dispatch = useDispatch();
    const anchorEl = useSelector(selectAnchorElement);
    const onMenuOpen = (event: React.MouseEvent<HTMLElement>) => () =>
        dispatch(openMenu(event.currentTarget));

    const onMenuClose = () => {
        return () => dispatch(closeMenu());
    };
    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={onMenuClose}
        >
            <MenuItem onClick={onMenuClose}>Profile</MenuItem>
            <MenuItem onClick={onMenuClose}>My account</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;
