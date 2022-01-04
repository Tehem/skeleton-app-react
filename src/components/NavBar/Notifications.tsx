import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

import React from 'react';
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
            size="large"
            aria-label={intl.formatMessage(messages.viewNotifications)}
            color="inherit"
        >
            <Badge badgeContent={17} color="error">
                <FontAwesomeIcon icon={faBell} />
            </Badge>
        </IconButton>
    );
};
