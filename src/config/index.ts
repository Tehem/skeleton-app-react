const config = {
    auth0: {
        domainName: import.meta.env.VITE_AUTH0_DOMAIN_NAME || 'CHANGE_ME',
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'CHANGE_ME',
        redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI || 'CHANGE_ME',
        audience: import.meta.env.VITE_AUTH0_AUDIENCE || 'CHANGE_ME',
    },
    api: {
        endpointUrl:
            import.meta.env.VITE_API_SERVER_URL || 'http://localhost:8081',
    },
};

export default config;
