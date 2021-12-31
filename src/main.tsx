import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import ProviderWithHistory from './components/Auth0/ProviderWithHistory';
import { IntlWrapper } from './components/IntlWrapper/IntlWrapper';

import { store } from './app/store';

//routes
import App from './App';
import About from './routes/about';
import Profile from './routes/profile';
import NoMatch from './routes/noMatch';

import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlWrapper>
                <ChakraProvider theme={theme}>
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Router>
                        <ProviderWithHistory>
                            <Routes>
                                <Route path="/" element={<App />}>
                                    <Route path="about" element={<About />} />
                                    <Route
                                        path="profile"
                                        element={<Profile />}
                                    />
                                    <Route path="*" element={<NoMatch />} />
                                </Route>
                            </Routes>
                        </ProviderWithHistory>
                    </Router>
                </ChakraProvider>
            </IntlWrapper>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
