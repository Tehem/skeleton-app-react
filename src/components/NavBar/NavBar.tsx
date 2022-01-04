import { useSelector } from 'react-redux';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import { Profile, MobileProfile } from './Profile';
import { NavBarButtonLink, NavBarLink } from './NavBarLink';
import ColorModeToggleButton from '../ColorMode/ColorModeToggleButton';
import { selectColorMode } from '../ColorMode/ColorModeSlice';

import SearchBar from './SearchBar';

// const NavBarLinks = [
//     { label: 'Dashboard', to: '/dashboard' },
//     { label: 'Team', to: '/team' },
//     { label: 'Projects', to: '/projects' },
//     { label: 'Calendar', to: '/calendar' },
// ];

export default function NavBar() {
    const colorMode = useSelector(selectColorMode);
    const logoUrl =
        colorMode === 'light'
            ? 'https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
            : 'https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg';
    return (
        <Disclosure as="nav" className="shadow bg-base-200 text-base-content">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex items-center px-2 lg:px-0">
                                <div className="flex-shrink-0">
                                    <img
                                        className="block lg:hidden h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src={logoUrl}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden lg:block lg:ml-6">
                                    <div className="flex space-x-4">
                                        <NavBarLink
                                            href="#"
                                            label="Dashboard"
                                            active
                                        />
                                        <NavBarLink href="#" label="Team" />
                                        <NavBarLink href="#" label="Projects" />
                                        <NavBarLink href="#" label="Calendar" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                                <SearchBar />
                            </div>
                            <div className="flex lg:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:block lg:ml-4">
                                <div className="flex gap-2 items-center">
                                    <ColorModeToggleButton />
                                    <Profile />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavBarButtonLink
                                href="#"
                                label="Dashboard"
                                active
                            />
                            <NavBarButtonLink href="#" label="Team" />
                            <NavBarButtonLink href="#" label="Projects" />
                            <NavBarButtonLink href="#" label="Calendar" />
                        </div>
                        <MobileProfile />
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
