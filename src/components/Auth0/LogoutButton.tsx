import { useAuth0 } from '@auth0/auth0-react';
import { faSignOut } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu } from '@headlessui/react';

import classNames from 'classnames';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../Button/Button';

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
            icon={<FontAwesomeIcon icon={faSignOut} />}
            label={<LogoutLabel />}
        />
    );
};

export const LogoutMenuItem = () => {
    const { logout } = useAuth0();

    return (
        <Menu.Item>
            {({ active }) => (
                <div
                    // href="#"
                    className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700'
                    )}
                    onClick={() => logout({ returnTo: window.location.origin })}
                >
                    <FontAwesomeIcon icon={faSignOut} />
                    <LogoutLabel />
                </div>
            )}
        </Menu.Item>
    );
};
