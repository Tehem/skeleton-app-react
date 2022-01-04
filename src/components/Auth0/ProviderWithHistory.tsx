import { AppState, Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import config from '../../config';

const ProviderWithHistory: React.FC = ({ children }) => {
    const navigate = useNavigate();

    const onRedirectCallback = (appState: AppState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={config.auth0.domainName}
            clientId={config.auth0.clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={config.auth0.audience}
        >
            {children}
        </Auth0Provider>
    );
};

export default ProviderWithHistory;
