import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'

import { motion } from 'framer-motion'
import { Box, Button, Flex, Image, Link, Text, Select } from '@chakra-ui/react'

import { IntlContext } from './components/IntlWrapper/IntlWrapper'

import Profile from './components/Auth0/Profile'
import ThemeToggleButton from './components/ThemeToggleButton/ThemeToggleButton'

import logo from './logo.svg'

const textFontSizes = [16, 18, 24, 30]

function App() {
    const [count, setCount] = useState(0)
    const context = useContext(IntlContext)

    return (
        <Box>
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
                <Text fontSize={textFontSizes}>
                    Hello Vite + React + Typescript + Chakra UI!
                </Text>
                <Button
                    colorScheme="blue"
                    fontSize={textFontSizes}
                    onClick={() => setCount((c) => c + 1)}
                    marginTop="2"
                >
                    count is: {count}
                </Button>
                <Text fontSize={textFontSizes}>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="default app message"
                    />
                </Text>
                <Text fontSize={textFontSizes}>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </Text>
                <Select
                    placeholder="Select option"
                    value={context.locale}
                    onChange={context.onLocaleChange}
                >
                    <option value="en-US">English</option>
                    <option value="fr-FR">French</option>
                </Select>
                <Profile />
                <Text fontSize={textFontSizes}>
                    <Link href="https://reactjs.org" isExternal color="#61dafb">
                        Learn React
                    </Link>
                    {' | '}
                    <Link
                        href="https://vitejs.dev/guide/features.html"
                        isExternal
                        color="#61dafb"
                    >
                        Vite Docs
                    </Link>
                    {' | '}
                    <Link
                        href="https://www.typescriptlang.org/"
                        isExternal
                        color="#61dafb"
                    >
                        Typescript
                    </Link>
                    {' | '}
                    <Link
                        href="https://chakra-ui.com"
                        isExternal
                        color="#61dafb"
                    >
                        Chakra UI
                    </Link>
                </Text>
            </Flex>
            <ThemeToggleButton pos="fixed" bottom="2" right="2" />
        </Box>
    )
}

export default App
