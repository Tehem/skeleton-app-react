import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { IntlWrapper } from './components/IntlWrapper/IntlWrapper'

import './index.css'
import { store } from './app/store'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlWrapper>
                <App />
            </IntlWrapper>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
