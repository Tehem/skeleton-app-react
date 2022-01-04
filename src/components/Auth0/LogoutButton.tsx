import { useAuth0 } from '@auth0/auth0-react';
import { Button, MenuItem } from '@chakra-ui/react';
import { faSignOut } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { FormattedMessage } from 'react-intl';

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
            leftIcon={
                <FontAwesomeIcon
                    icon={faSignOut}
                    size="lg"
                    aria-hidden="true"
                />
            }
            variant="outline"
            size="lg"
            fontSize="lg"
            ml={2}
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            <LogoutLabel />
        </Button>
    );
};

export const LogoutMenuItem = () => {
    const { logout } = useAuth0();

    return (
        <MenuItem
            icon={
                <FontAwesomeIcon
                    icon={faSignOut}
                    size="lg"
                    aria-hidden="true"
                />
            }
            onClick={() => logout({ returnTo: window.location.origin })}
        >
            <LogoutLabel />
        </MenuItem>
    );
};
