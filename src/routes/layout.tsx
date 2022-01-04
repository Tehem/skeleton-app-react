import { Container } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

function Layout() {
    return (
        <Container>
            {/*<NavBar />*/}
            <div>
                <div>Hello Vite + React + Typescript + Chakra UI!</div>

                <div>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="default app message"
                    />
                </div>
                <h1>Hello world!</h1>
                <div>
                    Edit again <code>App.tsx</code> and save to test HMR
                    updates.
                </div>
                <Outlet />
            </div>
            <Footer />
        </Container>
    );
}

export default Layout;
