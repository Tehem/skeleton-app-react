import { IconButton, useColorMode } from '@chakra-ui/react';
import { faMoon, faSun } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { useAppDispatch } from '../../app/hooks';
import { switchMode } from './ColorModeSlice';

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
    const dispatch = useAppDispatch();
    // const colorMode = useAppSelector(selectColorMode);
    const { colorMode, toggleColorMode } = useColorMode();
    const onToggleColorMode = () => {
        toggleColorMode();
        dispatch(switchMode());
    };

    const label =
        colorMode === 'dark' ? messages.darkLabel : messages.lightLabel;
    return (
        <IconButton
            variant="ghost"
            size="sm"
            fontSize="xl"
            ml={2}
            color="current"
            aria-label={intl.formatMessage(label)}
            onClick={onToggleColorMode}
            icon={
                colorMode === 'light' ? (
                    <FontAwesomeIcon aria-hidden="true" icon={faMoon} />
                ) : (
                    <FontAwesomeIcon aria-hidden="true" icon={faSun} />
                )
            }
            isRound
        />
    );
};

export default ThemeToggleButton;
