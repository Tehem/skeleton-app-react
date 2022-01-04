import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//routes
import App from './App';

import store from './app/store';

import ProviderWithHistory from './components/Auth0/ProviderWithHistory';
import { IntlWrapper } from './components/IntlWrapper/IntlWrapper';

import './index.css';
import About from './routes/about';
import CookiePolicy from './routes/cookie';
import NoMatch from './routes/noMatch';
import PrivacyPolicy from './routes/privacy';
import Profile from './routes/profile';
import TermsOfUse from './routes/terms';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlWrapper>
                <Router>
                    <ProviderWithHistory>
                        <Routes>
                            <Route path="/" element={<App />}>
                                <Route path="about" element={<About />} />
                                <Route path="terms" element={<TermsOfUse />} />
                                <Route
                                    path="privacy"
                                    element={<PrivacyPolicy />}
                                />
                                <Route
                                    path="cookie"
                                    element={<CookiePolicy />}
                                />
                                <Route path="profile" element={<Profile />} />
                                <Route path="*" element={<NoMatch />} />
                            </Route>
                        </Routes>
                    </ProviderWithHistory>
                </Router>
            </IntlWrapper>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
