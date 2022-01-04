import { Box, Select } from '@chakra-ui/react';

import { useContext } from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import { IntlContext } from '../IntlWrapper/IntlWrapper';
import { FooterHeading } from './FooterHeading';

const messages = defineMessages({
    langEN: {
        id: 'app.language.en-US',
        defaultMessage: 'English',
    },
    langFR: {
        id: 'app.language.fr-FR',
        defaultMessage: 'French',
    },
});

export const LanguageSwitcher = () => {
    const context = useContext(IntlContext);
    const intl = useIntl();
    return (
        <Box>
            <FooterHeading mb="4">
                <FormattedMessage id="app.language" defaultMessage="Language" />
            </FooterHeading>
            <Select value={context.locale} onChange={context.onLocaleChange}>
                <option value="en-US">
                    {intl.formatMessage(messages.langEN)}
                </option>
                <option value="fr-FR">
                    {intl.formatMessage(messages.langFR)}
                </option>
            </Select>
        </Box>
    );
};
