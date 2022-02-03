import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';

import Loading from '../components/Loading/Loading';
import UserProfile from '../features/userProfile/UserProfile';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    if (isAuthenticated && user && user.sub) {
        return <UserProfile userId={user.sub} />;
    }

    return <div>Error loading profile...</div>;
};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
