import {
    faFacebook,
    faSlack,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

import { IntlContext } from '../IntlWrapper/IntlWrapper';
import { FooterLink } from './FooterLink';

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

export default function Footer() {
    const context = useContext(IntlContext);
    const intl = useIntl();
    return (
        <Box
            component="footer"
            sx={{ bgcolor: 'background.paper', flexGrow: 1 }}
        >
            <Grid container spacing={2} justifyContent="space-between">
                <Grid item xs={12} sm={6} md={3}>
                    <Typography>Services</Typography>
                    <FooterLink href="#" label="Branding" />
                    <FooterLink href="#" label="Design" />
                    <FooterLink href="#" label="Marketing" />
                    <FooterLink href="#" label="Advertisement" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography>Company</Typography>

                    <FooterLink
                        href="/about"
                        label={
                            <FormattedMessage
                                id="routes.about"
                                defaultMessage="About page"
                            />
                        }
                    />
                    <FooterLink href="#" label="Contact" />
                    <FooterLink href="#" label="Jobs" />
                    <FooterLink href="#" label="Press kit" />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography>Legal</Typography>
                    <FooterLink
                        href="/terms"
                        label={
                            <FormattedMessage
                                id="routes.termsOfUse"
                                defaultMessage="Terms of use"
                            />
                        }
                    />
                    <FooterLink
                        href="/privacy"
                        label={
                            <FormattedMessage
                                id="routes.privacyPolicy"
                                defaultMessage="Privacy policy"
                            />
                        }
                    />
                    <FooterLink
                        href="/cookie"
                        label={
                            <FormattedMessage
                                id="routes.cookiePolicy"
                                defaultMessage="Cookie policy"
                            />
                        }
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Typography>
                        <FormattedMessage
                            id="app.language"
                            defaultMessage="Language"
                        />
                    </Typography>
                    <select
                        value={context.locale}
                        onChange={context.onLocaleChange}
                    >
                        <option value="en-US">
                            {intl.formatMessage(messages.langEN)}
                        </option>
                        <option value="fr-FR">
                            {intl.formatMessage(messages.langFR)}
                        </option>
                    </select>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FontAwesomeIcon icon={faSlack} size="2x" />

                    <Typography>
                        Tehem.net Ltd.
                        <br />
                        Providing reliable tech since 1999
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <a>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
