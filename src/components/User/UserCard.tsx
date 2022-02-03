import { User } from '@auth0/auth0-react';
import { HStack, Stack, Tag, Text, Wrap } from '@chakra-ui/react';

import { faCalendar, faGlobe } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Card } from '../Card/Card';
import { CardContent } from '../Card/CardContent';
import { CardHeader } from '../Card/CardHeader';
import { UserAvatar } from './UserAvatar';

interface UserCardProps {
    user: User; // change this for API user type
}

export const UserCard = (props: UserCardProps) => {
    const { user } = props;

    return (
        <Card>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                spacing={{ base: '4', md: '10' }}
            >
                <UserAvatar
                    name={user.name}
                    src={user.avatar.mini}
                    isVerified={user.online}
                />
                <CardContent>
                    <CardHeader title={user.name || 'Unknown'} />
                    <Text mt="1" fontWeight="medium">
                        {user.email}
                    </Text>
                    <Stack spacing="1" mt="2">
                        <HStack fontSize="sm">
                            <FontAwesomeIcon icon={faGlobe} />
                            <Text>
                                {user.city}, {user.country}
                            </Text>
                        </HStack>
                        <HStack fontSize="sm">
                            <FontAwesomeIcon icon={faCalendar} />
                            <Text>{user.birthdate}</Text>
                        </HStack>
                    </Stack>

                    <Text fontWeight="semibold" mt="8" mb="2">
                        Interests
                    </Text>
                    <Wrap shouldWrapChildren>
                        <Tag>Productivity</Tag>
                        <Tag>Work</Tag>
                        <Tag>Business</Tag>
                        <Tag>Woman</Tag>
                    </Wrap>
                </CardContent>
            </Stack>
        </Card>
    );
};
