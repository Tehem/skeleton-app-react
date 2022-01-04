import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProviderWithHistory from './components/Auth0/ProviderWithHistory';
import { IntlWrapper } from './components/IntlWrapper/IntlWrapper';

import About from './routes/about';
import CookiePolicy from './routes/cookie';
import Layout from './routes/layout';
import NoMatch from './routes/noMatch';
import PrivacyPolicy from './routes/privacy';
import Profile from './routes/profile';
import TermsOfUse from './routes/terms';

function App() {
    return (
        <IntlWrapper>
            <Router>
                <ProviderWithHistory>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="about" element={<About />} />
                            <Route path="terms" element={<TermsOfUse />} />
                            <Route path="privacy" element={<PrivacyPolicy />} />
                            <Route path="cookie" element={<CookiePolicy />} />
                            <Route path="profile" element={<Profile />} />
                            <Route path="*" element={<NoMatch />} />
                        </Route>
                    </Routes>
                </ProviderWithHistory>
            </Router>
        </IntlWrapper>
    );
}

export default App;
