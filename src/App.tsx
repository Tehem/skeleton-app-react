import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectColorMode } from './components/ColorMode/ColorModeSlice';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
    const colorMode = useSelector(selectColorMode);
    return (
        <div
            data-theme={colorMode}
            className="container mx-auto sm:px-6 lg:px-8"
        >
            <NavBar />
            <div className="relative">
                <div>Hello Vite + React + Typescript + Chakra UI!</div>

                <div>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="default app message"
                    />
                </div>
                <h1 className="text-3xl font-bold">Hello world!</h1>
                <div>
                    Edit again <code>App.tsx</code> and save to test HMR
                    updates.
                </div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
