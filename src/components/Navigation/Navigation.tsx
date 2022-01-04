import { useAuth0 } from '@auth0/auth0-react';
import { Center, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { NavBar } from './NavBar';
import { NavLink } from './NavLink';
import { SearchInput } from './Search';
import { UserMenu } from './UserMenu';
import { UserProfile } from './UserProfile';

const Navigation = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <NavBar>
            <NavBar.Brand>
                <Center marginEnd="10">
                    <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
                </Center>
            </NavBar.Brand>
            <NavBar.Links>
                <NavLink isActive to="/">
                    Start
                </NavLink>
                <NavLink to="/">Features</NavLink>
                <NavLink to="/">Documentation</NavLink>
            </NavBar.Links>
            <NavBar.Search>
                <SearchInput />
            </NavBar.Search>
            <NavBar.UserProfile>
                <UserProfile
                    isAuthenticated={isAuthenticated}
                    isLoading={isLoading}
                    user={user}
                />
            </NavBar.UserProfile>
            <NavBar.UserMenu>
                <UserMenu
                    isAuthenticated={isAuthenticated}
                    isLoading={isLoading}
                    user={user}
                />
            </NavBar.UserMenu>
        </NavBar>
    );
};

export default Navigation;
