import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

import LoginButton from '../Auth0/LoginButton';
import { LogoutMenuItem } from '../Auth0/LogoutButton';
import Notifications from './Notifications';
import { Avatar } from '../Avatar/Avatar';
import Loading from '../Loading/Loading';

export const MobileProfile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }
    return (
        (isAuthenticated && user && (
            <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={user.picture}
                            alt={user.nickname}
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-white">
                            {user.nickname}
                        </div>
                        <div className="text-sm font-medium text-gray-400">
                            {user.email}
                        </div>
                    </div>
                    <Notifications />
                </div>
                <div className="mt-3 px-2 space-y-1">
                    <Link
                        to="profile"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                        Your Profile
                    </Link>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                        Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                        Sign out
                    </Disclosure.Button>
                </div>
            </div>
        )) || (
            <div>
                <LoginButton />
            </div>
        )
    );
};

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        (isAuthenticated && user && (
            <>
                <Notifications />
                <Menu as="div" className="ml-4 relative flex-shrink-0">
                    <div>
                        <Menu.Button className="rounded-full flex text-sm dark:bg-gray-800 dark:text-white">
                            <span className="sr-only">Open user menu</span>
                            {user.picture ? <Avatar src={user.picture} /> : ''}
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="profile"
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                    >
                                        Your Profile
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                    >
                                        Settings
                                    </a>
                                )}
                            </Menu.Item>

                            <LogoutMenuItem />
                        </Menu.Items>
                    </Transition>
                </Menu>
            </>
        )) || (
            <div>
                <LoginButton />
            </div>
        )
    );
};
