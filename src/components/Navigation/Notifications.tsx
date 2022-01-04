import { IconButton } from '@chakra-ui/react';
import { faBell } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
    viewNotifications: {
        id: 'app.notifications.view',
        defaultMessage: 'View notifications',
    },
});

export default () => {
    const intl = useIntl();
    return (
        <IconButton
            isRound
            size="sm"
            fontSize="xl"
            aria-label={intl.formatMessage(messages.viewNotifications)}
            variant="ghost"
            color="current"
            ml={2}
            icon={<FontAwesomeIcon icon={faBell} />}
        />
    );
};
