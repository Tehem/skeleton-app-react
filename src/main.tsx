import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { IntlWrapper } from './components/IntlWrapper/IntlWrapper';

import { store } from './app/store';
import config from './config';

//routes
import App from './App';
import About from './routes/about';
import NoMatch from './routes/noMatch';

import theme from './theme';

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
                        <Router>
                            <Routes>
                                <Route path="/" element={<App />}>
                                    <Route path="about" element={<About />} />
                                    <Route path="*" element={<NoMatch />} />
                                </Route>
                            </Routes>
                        </Router>
                    </ChakraProvider>
                </IntlWrapper>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
