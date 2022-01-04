import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import theme from './app/theme';

import ProviderWithHistory from './components/Auth0/ProviderWithHistory';
import { selectColorMode } from './components/ColorMode/ColorModeSlice';
import { IntlWrapper } from './components/IntlWrapper/IntlWrapper';

import About from './routes/about';
import CookiePolicy from './routes/cookie';
import Layout from './routes/layout';
import NoMatch from './routes/noMatch';
import PrivacyPolicy from './routes/privacy';
import Profile from './routes/profile';
import TermsOfUse from './routes/terms';

function App() {
    const colorMode = useSelector(selectColorMode);
    return (
        <IntlWrapper>
            <ThemeProvider theme={theme(colorMode)}>
                <CssBaseline />
                <Router>
                    <ProviderWithHistory>
                        <Routes>
                            <Route path="/" element={<Layout />}>
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
            </ThemeProvider>
        </IntlWrapper>
    );
}

export default App;
