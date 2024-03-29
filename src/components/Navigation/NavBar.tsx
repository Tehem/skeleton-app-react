import {
    Divider,
    Flex,
    HStack,
    IconButton,
    Spacer,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import { faBars } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { isValidElement, ReactElement } from 'react';

import { MobileNavContent } from './MobileNavContent';

const Brand: React.FC = () => null;
const Links: React.FC = () => null;
const Search: React.FC = () => null;
const UserProfile: React.FC = () => null;
const UserMenu: React.FC = () => null;

export const Template: React.FC = (props) => {
    const children = React.Children.toArray(
        props.children
    ).filter<ReactElement>(isValidElement);
    const mobileNav = useDisclosure();
    return (
        <Flex
            py={4}
            px={{ base: 4, md: 6, lg: 8 }}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={useColorModeValue('md', 'none')}
            borderBottomWidth={useColorModeValue('none', '1px')}
        >
            {children.find((child) => child.type === Brand)?.props.children}

            <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
                {children.find((child) => child.type === Links)?.props.children}
            </HStack>
            {children.find((child) => child.type === Search)?.props.children}

            <Spacer />
            <HStack display={{ base: 'none', md: 'flex' }} spacing={3}>
                {
                    children.find((child) => child.type === UserProfile)?.props
                        .children
                }
            </HStack>

            <IconButton
                display={{ base: 'flex', md: 'none' }}
                // size="sm"
                aria-label="Open menu"
                fontSize="xl"
                variant="ghost"
                ml={1}
                onClick={mobileNav.onOpen}
                icon={<FontAwesomeIcon icon={faBars} />}
            />

            <MobileNavContent
                isOpen={mobileNav.isOpen}
                onClose={mobileNav.onClose}
            >
                <Stack spacing={5}>
                    <Flex>
                        {
                            children.find((child) => child.type === Brand)
                                ?.props.children
                        }
                    </Flex>
                    <Flex>
                        {
                            children.find((child) => child.type === Search)
                                ?.props.children
                        }
                    </Flex>
                    <Stack>
                        {
                            children.find((child) => child.type === Links)
                                ?.props.children
                        }
                    </Stack>
                    <Divider />
                    <Flex>
                        {
                            children.find((child) => child.type === UserProfile)
                                ?.props.children
                        }
                    </Flex>
                    <Stack>
                        {
                            children.find((child) => child.type === UserMenu)
                                ?.props.children
                        }
                    </Stack>
                </Stack>
            </MobileNavContent>
        </Flex>
    );
};

export const NavBar = Object.assign(Template, {
    Brand,
    Links,
    Search,
    UserProfile,
    UserMenu,
});
