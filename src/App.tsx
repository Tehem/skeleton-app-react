import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'

import { IntlContext } from './components/IntlWrapper/IntlWrapper'

import Profile from './components/Auth0/Profile'

import logo from './logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const context = useContext(IntlContext)

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello Vite + React boilerplate!</p>
                <p>
                    <FormattedMessage
                        id="app.title"
                        defaultMessage="default app message"
                    />
                </p>
                <p>
                    <button
                        type="button"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        count is: {count}
                    </button>
                </p>
                <p>
                    <select
                        value={context.locale}
                        onChange={context.onLocaleChange}
                    >
                        <option value="en-US">English</option>
                        <option value="fr-FR">French</option>
                    </select>
                </p>
                <p>
                    Edit <code>App.tsx</code> and save to test HMR updates.
                </p>
                <p>
                    <Profile />
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    )
}

export default App
