import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/react';
import { faSignIn } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { FormattedMessage } from 'react-intl';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Button
            leftIcon={<FontAwesomeIcon icon={faSignIn} aria-hidden="true" />}
            variant="solid"
            size="sm"
            fontSize="xl"
            color="white"
            colorScheme="blue"
            ml={2}
            onClick={() => loginWithRedirect()}
        >
            <FormattedMessage id="app.auth.login" defaultMessage="Sign in" />
        </Button>
    );
};

export default LoginButton;
