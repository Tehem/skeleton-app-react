import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Code } from '@chakra-ui/react';

import Loading from '../components/Loading/Loading';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    return (
        isAuthenticated &&
        user && (
            <div>
                <h1>Profile page</h1>
                <div>Name: {user.nickname}</div>
                <div>Email: {user.email}</div>
                <div>
                    <Code>{JSON.stringify(user, null, 2)}</Code>
                </div>
            </div>
        )
    );
};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
