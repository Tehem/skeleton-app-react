import { User } from '@auth0/auth0-react';
import {
    Avatar,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';

import { faUser } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginButton from '../Auth0/LoginButton';
import { LogoutMenuItem } from '../Auth0/LogoutButton';
import ColorModeToggleButton from '../ColorMode/ColorModeToggleButton';
import Loading from '../Loading/Loading';
import { Notifications } from './Notifications';

interface Props {
    isLoading: boolean;
    isAuthenticated: boolean;
    user?: User;
}

export const UserProfile: React.FC<Props> = (props) => {
    const { isLoading, isAuthenticated, user } = props;
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading />;
    }
    return (
        (isAuthenticated && user && (
            <>
                <Flex order={{ base: 2, md: 1 }}>
                    <ColorModeToggleButton />
                    <Notifications />
                </Flex>
                <HStack spacing={3} order={{ base: 1, md: 2 }} flex="1">
                    <Flex display={{ base: 'flex', md: 'none' }}>
                        <Avatar
                            name={user.nickname}
                            src={user.picture}
                            size="sm"
                        />
                        <Flex direction="column">
                            <Text fontWeight="bold" lineHeight="shorter">
                                {user.nickname}
                            </Text>
                            <Text
                                fontSize="sm"
                                lineHeight="shorter"
                                opacity={0.7}
                            >
                                {user.email}
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex display={{ base: 'none', md: 'flex' }}>
                        <Menu isLazy>
                            <MenuButton
                                as={Avatar}
                                name={user.nickname}
                                src={user.picture}
                                size="sm"
                            />
                            <MenuList>
                                <MenuItem
                                    icon={
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            size="lg"
                                            aria-hidden="true"
                                        />
                                    }
                                    onClick={() => navigate('/profile')}
                                >
                                    Your Profile
                                </MenuItem>
                                <LogoutMenuItem />
                            </MenuList>
                        </Menu>
                    </Flex>
                </HStack>
            </>
        )) || (
            <>
                <ColorModeToggleButton />
                <LoginButton />
            </>
        )
    );
};
