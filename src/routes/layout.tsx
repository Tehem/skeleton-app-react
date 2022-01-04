import { Box, Divider, useColorModeValue as mode } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';

function Layout() {
    return (
        <>
            <Box minH="24rem" bg={mode('white', 'gray.800')}>
                <Navigation />
                <Box m={2}>
                    <Outlet />
                </Box>
            </Box>
            <Divider />
            <Footer />
        </>
    );
}

export default Layout;
