import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

import { IntlWrapper } from './components/IntlWrapper/IntlWrapper'

import './index.css'
import { store } from './app/store'
import config from './config'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
                domain={config.auth0.domainName}
                clientId={config.auth0.clientId}
                redirectUri={window.location.origin}
            >
                <IntlWrapper>
                    <App />
                </IntlWrapper>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
