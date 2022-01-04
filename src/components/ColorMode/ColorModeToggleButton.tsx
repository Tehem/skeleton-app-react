import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import { Button } from '../Button/Button';
import { switchMode, selectColorMode } from './ColorModeSlice';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

const messages = defineMessages({
    lightLabel: {
        id: 'app.colorMode.light',
        defaultMessage: 'Activate light mode',
    },
    darkLabel: {
        id: 'app.colorMode.dark',
        defaultMessage: 'Activate dark mode',
    },
});

const ThemeToggleButton = (): JSX.Element => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const colorMode = useSelector(selectColorMode);
    const onToggleColorMode = () => dispatch(switchMode());

    const label =
        colorMode === 'dark' ? messages.darkLabel : messages.lightLabel;
    return (
        <Button
            type="ghost"
            ariaLabel={intl.formatMessage(label)}
            srOnly={
                <FormattedMessage
                    id={label.id}
                    defaultMessage={label.defaultMessage}
                />
            }
            onClick={onToggleColorMode}
            icon={
                colorMode === 'light' ? (
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                )
            }
            circle
        />
    );
};

export default ThemeToggleButton;
