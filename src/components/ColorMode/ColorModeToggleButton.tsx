import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@mui/material/IconButton';

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { selectColorMode, switchMode } from './ColorModeSlice';

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
        <IconButton
            onClick={onToggleColorMode}
            color="inherit"
            aria-label={intl.formatMessage(label)}
        >
            {colorMode === 'dark' ? (
                <FontAwesomeIcon icon={faMoon} size="2x" />
            ) : (
                <FontAwesomeIcon icon={faSun} size="2x" />
            )}
        </IconButton>
    );
};

export default ThemeToggleButton;
