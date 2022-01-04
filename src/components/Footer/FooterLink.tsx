import { Link } from 'react-router-dom';

type FooterLinkPros = {
    href: string;
    label: string | JSX.Element;
};

export const FooterLink = ({ href, label }: FooterLinkPros) => {
    return (
        <Link to={href} className="link link-hover">
            {label}
        </Link>
    );
};
