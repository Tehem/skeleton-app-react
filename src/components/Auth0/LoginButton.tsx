import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage } from 'react-intl';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/pro-regular-svg-icons';
import { Button } from '../Button/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            type="primary"
            onClick={() => loginWithRedirect()}
            icon={
                <FontAwesomeIcon
                    icon={faSignIn}
                    size="lg"
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                />
            }
            label={
                <FormattedMessage
                    id="app.auth.login"
                    defaultMessage="Sign in"
                />
            }
        />
    );
};

export default LoginButton;
