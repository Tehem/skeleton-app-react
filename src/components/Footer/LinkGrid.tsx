import {
    Box,
    Link,
    SimpleGrid,
    SimpleGridProps,
    Stack,
} from '@chakra-ui/react';

import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';

import { FooterHeading } from './FooterHeading';

export const LinkGrid = (props: SimpleGridProps) => (
    <SimpleGrid columns={2} {...props}>
        <Box minW="130px">
            <FooterHeading mb="4">Product</FooterHeading>
            <Stack>
                <Link>How it works</Link>
                <Link>Pricing</Link>
                <Link>Use Cases</Link>
            </Stack>
        </Box>
        <Box minW="130px">
            <FooterHeading mb="4">Legal</FooterHeading>
            <Stack>
                <Link as={RouterLink} to="/privacy">
                    <FormattedMessage
                        id="routes.privacyPolicy"
                        defaultMessage="Privacy policy"
                    />
                </Link>
                <Link as={RouterLink} to="/terms">
                    <FormattedMessage
                        id="routes.termsOfUse"
                        defaultMessage="Terms of use"
                    />
                </Link>
                <Link as={RouterLink} to="/cookie">
                    <FormattedMessage
                        id="routes.cookiePolicy"
                        defaultMessage="Cookie policy"
                    />
                </Link>
            </Stack>
        </Box>
    </SimpleGrid>
);
