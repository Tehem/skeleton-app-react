import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/pro-regular-svg-icons';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            onClick={() => loginWithRedirect()}
            leftIcon={<FontAwesomeIcon icon={faSignIn} />}
        >
            <FormattedMessage
                id="app.auth.login"
                defaultMessage="Log in (default)"
            />
        </Button>
    );
};

export default LoginButton;
