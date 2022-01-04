import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

import Loading from '../components/Loading/Loading';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    if (isAuthenticated && user) {
        return (
            <div>
                <h1>Profile page</h1>
                <div>Name: {user.nickname}</div>
                <div>Email: {user.email}</div>
                <div>
                    <pre>{JSON.stringify(user, null, 2)}</pre>
                </div>
            </div>
        );
    }

    return <div>Error loading profile...</div>;
};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
