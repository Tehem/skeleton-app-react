import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';

import Loading from '../components/Loading/Loading';
import { UserCard } from '../components/User/UserCard';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    if (isAuthenticated && user) {
        return (
            <Box
                as="section"
                bg={useColorModeValue('gray.100', 'gray.800')}
                p={4}
            >
                <Heading as="h1" mb={4}>
                    <FormattedMessage
                        id="routes.profile"
                        defaultMessage="Your profile"
                    />
                </Heading>

                <UserCard user={user} />
            </Box>
        );
    }

    return <div>Error loading profile...</div>;
};

export default withAuthenticationRequired(Profile, {
    onRedirecting: () => <Loading />,
});
