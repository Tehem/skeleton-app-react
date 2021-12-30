import { createStore, combineReducers } from 'redux'

import { intlWrapperReducer } from '../components/IntlWrapper/IntlWrapperSlice'

const reducers = {
    i18n: intlWrapperReducer,
}

export const store = createStore(combineReducers(reducers))
