import {
    Avatar,
    AvatarBadge,
    AvatarProps,
    useColorModeValue,
} from '@chakra-ui/react';
import { faBadgeCheck } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as React from 'react';

interface UserAvatarProps extends AvatarProps {
    isVerified?: boolean;
}

export const UserAvatar = (props: UserAvatarProps) => {
    const { isVerified, ...avatarProps } = props;
    const avatarColor = useColorModeValue('white', 'gray.700');
    const iconColor = useColorModeValue('blue.500', 'blue.200');

    return (
        <Avatar size="2xl" {...avatarProps}>
            {isVerified && (
                <AvatarBadge
                    borderWidth="4px"
                    borderColor={avatarColor}
                    insetEnd="3"
                    bottom="3"
                    bg={avatarColor}
                >
                    <FontAwesomeIcon icon={faBadgeCheck} color={iconColor} />
                </AvatarBadge>
            )}
        </Avatar>
    );
};
