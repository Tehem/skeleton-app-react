const config = {
    auth0: {
        domainName: import.meta.env.VITE_AUTH0_DOMAIN_NAME || 'CHANGE_ME',
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'CHANGE_ME',
        redirectUri: import.meta.env.VITE_AUTH0_REDIRECT_URI || 'CHANGE_ME',
    },
}

export default config
