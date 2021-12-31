import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { IntlWrapper } from './components/IntlWrapper/IntlWrapper'

import { store } from './app/store'
import config from './config'

import App from './App'
import theme from './theme'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
                domain={config.auth0.domainName}
                clientId={config.auth0.clientId}
                redirectUri={window.location.origin}
            >
                <IntlWrapper>
                    <ChakraProvider theme={theme}>
                        <ColorModeScript
                            initialColorMode={theme.config.initialColorMode}
                        />
                        <App />
                    </ChakraProvider>
                </IntlWrapper>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
