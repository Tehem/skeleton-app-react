import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import {
    Avatar,
    Button,
    Center,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-regular-svg-icons';

import LoginButton from './LoginButton';
import { LogoutMenuItem } from './LogoutButton';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div>
                <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                Loading...
            </div>
        );
    }

    return (
        (isAuthenticated && user && (
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                >
                    <Avatar size={'sm'} src={user.picture} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                        <Avatar size={'2xl'} src={user.picture} />
                    </Center>
                    <br />
                    <Center>
                        <p>{user.name}</p>
                    </Center>
                    <br />
                    <MenuItem>
                        <Link to="profile">Profile</Link>
                    </MenuItem>
                    <MenuDivider />
                    <LogoutMenuItem />
                </MenuList>
            </Menu>
        )) || (
            <div>
                <LoginButton />
            </div>
        )
    );
};

export default Profile;
