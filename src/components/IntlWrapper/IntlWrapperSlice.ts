import messages from '../../lang'
import getLocale from '../../lang/detect-locale'
import { ActionCreator, Reducer } from '@reduxjs/toolkit'

const locale = getLocale()
const initialState = {
    locale: locale,
    messages: messages[locale],
}

export const intlWrapperReducer: Reducer = (
    intlState = initialState,
    action
) => {
    switch (action.type) {
        case 'i18n/switchLocale':
            const locale = action.payload
            const localeMessages = messages[locale]
            return {
                ...intlState,
                locale,
                messages: localeMessages,
            }

        default:
            return intlState
    }
}

export const switchLocale: ActionCreator<object> = (locale: string) => {
    return {
        type: 'i18n/switchLocale',
        payload: locale,
    }
}
