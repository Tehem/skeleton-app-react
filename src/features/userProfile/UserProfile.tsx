import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import Loading from '../../components/Loading/Loading';
import { UserCard } from '../../components/User/UserCard';
import config from '../../config';
import { loadUser } from './userProfileSlice';

const UserProfile = (props: { userId: string }) => {
    const dispatch = useAppDispatch();
    const { getAccessTokenSilently } = useAuth0();
    const { user, isLoading, hasError } = useAppSelector(
        (state) => state.userProfile
    );
    const colorModeValue = useColorModeValue('gray.100', 'gray.800');

    useEffect(() => {
        (async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: config.auth0.audience,
                });
                dispatch(loadUser({ token, userId: props.userId }));
            } catch (e) {
                console.error(e);
            }
        })();
    }, [dispatch, getAccessTokenSilently, props.userId]);

    const onRetryClick = () => {
        (async () => {
            try {
                const token = await getAccessTokenSilently({
                    audience: config.auth0.audience,
                });
                dispatch(loadUser({ token, userId: props.userId }));
            } catch (e) {
                console.error(e);
            }
        })();
    };

    if (isLoading) {
        return <Loading />;
    }

    if (hasError || Object.keys(user).length === 0) {
        return <Button onClick={onRetryClick}>Error, try again</Button>;
    }

    return (
        <Box as="section" bg={colorModeValue} p={4}>
            <Heading as="h1" mb={4}>
                <FormattedMessage
                    id="routes.profile"
                    defaultMessage="Your profile"
                />
            </Heading>

            <UserCard user={user} />
        </Box>
    );
};

export default UserProfile;
