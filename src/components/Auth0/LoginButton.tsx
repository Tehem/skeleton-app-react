import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FormattedMessage } from 'react-intl'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()

    return (
        <button onClick={() => loginWithRedirect()}>
            <FormattedMessage
                id="app.auth.login"
                defaultMessage="Log in (default)"
            />
        </button>
    )
}

export default LoginButton
