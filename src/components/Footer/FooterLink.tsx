import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type FooterLinkPros = {
    href: string;
    label: string | JSX.Element;
};

export const FooterLink = ({ href, label }: FooterLinkPros) => {
    return (
        <div>
            <Link component={RouterLink} to={href}>
                {label}
            </Link>
        </div>
    );
};
