import { User } from '@auth0/auth0-react';
import * as React from 'react';

import { LogoutButton } from '../Auth0/LogoutButton';
import Loading from '../Loading/Loading';
import { NavLink } from './NavLink';

interface Props {
    isLoading: boolean;
    isAuthenticated: boolean;
    user?: User;
}

export const UserMenu: React.FC<Props> = (props) => {
    const { isLoading, isAuthenticated, user } = props;
    if (isLoading) {
        return <Loading />;
    }
    return (
        (isAuthenticated && user && (
            <>
                <NavLink to="/profile">Your profile</NavLink>
                <LogoutButton />
            </>
        )) || <></>
    );
};
