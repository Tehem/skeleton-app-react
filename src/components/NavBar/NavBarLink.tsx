import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';

type NavBarLinkPros = {
    href: string;
    label: string;
    active?: boolean;
};

/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */
export const NavBarLink = ({ href, label, active }: NavBarLinkPros) => {
    const activeColorClasses = 'text-gray-900 dark:bg-gray-900 dark:text-white';
    const colorClasses =
        'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white';

    const className = `${
        active ? activeColorClasses : colorClasses
    } px-3 py-2 rounded-md text-sm font-medium`;
    return (
        <Link to={href} className={className}>
            {label}
        </Link>
    );
};

/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */
export const NavBarButtonLink = ({ href, label, active }: NavBarLinkPros) => {
    const activeColorClasses =
        'text-indigo-700 dark:bg-gray-900 dark:text-white';
    const colorClasses =
        'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white';

    const className = `${
        active ? activeColorClasses : colorClasses
    } block px-3 py-2 rounded-md text-base font-medium`;
    return (
        <Disclosure.Button as="a" href={href} className={className}>
            {label}
        </Disclosure.Button>
    );
};
