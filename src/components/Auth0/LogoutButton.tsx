import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { FormattedMessage } from 'react-intl'

const LogoutButton = () => {
    const { logout } = useAuth0()

    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            <FormattedMessage
                id="app.auth.logout"
                defaultMessage="Log out (default)"
            />
        </button>
    )
}

export default LogoutButton
