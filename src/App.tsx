import { FormattedMessage } from 'react-intl';
import { Outlet, Link as ReactLink } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import logo from './logo.svg';

function App() {
    return (
        <Box>
            <NavBar />
            <Flex
                as="header"
                direction="column"
                alignItems="center"
                justifyContent="center"
                h="100vh"
                fontSize="3xl"
            >
                <motion.div
                    animate={{ rotateZ: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: 'linear',
                    }}
                >
                    <Image src={logo} alt="logo" h="40vmin" />
                </motion.div>
                <Text>Hello Vite + React + Typescript + Chakra UI!</Text>

                <Text>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="default app message"
                    />
                </Text>
                <Text>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </Text>

                <nav>
                    <Link to="/about" as={ReactLink}>
                        <FormattedMessage
                            id="routes.about"
                            defaultMessage="About page"
                        />
                    </Link>
                </nav>
                <Outlet />
            </Flex>
            <Footer />
        </Box>
    );
}

export default App;
