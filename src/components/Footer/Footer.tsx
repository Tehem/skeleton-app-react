import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faSlack,
} from '@fortawesome/free-brands-svg-icons';

import { IntlContext } from '../IntlWrapper/IntlWrapper';
import { FooterLink } from './FooterLink';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';

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
        <>
            <footer className="p-10 footer bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <FooterLink href="#" label="Branding" />
                    <FooterLink href="#" label="Design" />
                    <FooterLink href="#" label="Marketing" />
                    <FooterLink href="#" label="Advertisement" />
                </div>
                <div>
                    <span className="footer-title">Company</span>

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
                </div>
                <div>
                    <span className="footer-title">Legal</span>
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
                </div>
                <div>
                    <span className="footer-title">
                        <FormattedMessage
                            id="app.language"
                            defaultMessage="Language"
                        />
                    </span>
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
                </div>
            </footer>
            <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <FontAwesomeIcon icon={faSlack} size="2x" />
                    <p>
                        Tehem.net Ltd.
                        <br />
                        Providing reliable tech since 1999
                    </p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
