import React, { ChangeEvent } from 'react'
import { IntlProvider } from 'react-intl'
import { useSelector, useDispatch } from 'react-redux'

import { switchLocale } from './IntlWrapperSlice'

export const IntlContext = React.createContext({
    locale: 'en-US',
    onLocaleChange: (e: ChangeEvent<HTMLSelectElement>) => {},
})

/**
 * Internationalization Wrapper for react-intl
 *
 * @param {PropsWithChildren} props
 * @constructor
 */
export const IntlWrapper: React.FunctionComponent = (props) => {
    const i18n = useSelector((state) => state.i18n)
    const dispatch = useDispatch()

    const onLocaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value
        dispatch(switchLocale(locale))
    }

    return (
        <IntlContext.Provider value={{ locale: i18n.locale, onLocaleChange }}>
            <IntlProvider messages={i18n.messages} locale={i18n.locale}>
                {props.children}
            </IntlProvider>
        </IntlContext.Provider>
    )
}
