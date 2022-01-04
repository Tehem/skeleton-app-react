import React from 'react';
import { BellIcon } from '@heroicons/react/solid';
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
        <button
            type="button"
            className="btn btn-circle btn-ghost"
            aria-label={intl.formatMessage(messages.viewNotifications)}
        >
            <span className="sr-only">
                {intl.formatMessage(messages.viewNotifications)}
            </span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
};
