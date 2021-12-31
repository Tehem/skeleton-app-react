import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage } from 'react-intl';
import { Button, MenuItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/pro-regular-svg-icons';

const LogoutLabel = () => {
    return (
        <FormattedMessage
            id="app.auth.logout"
            defaultMessage="Log out (default)"
        />
    );
};

export const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button
            onClick={() => logout({ returnTo: window.location.origin })}
            leftIcon={<FontAwesomeIcon icon={faSignOut} />}
        >
            <LogoutLabel />
        </Button>
    );
};

export const LogoutMenuItem = () => {
    const { logout } = useAuth0();

    return (
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>
            <FontAwesomeIcon icon={faSignOut} />
            &nbsp;
            <LogoutLabel />
        </MenuItem>
    );
};
