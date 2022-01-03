import { configureStore } from '@reduxjs/toolkit';

import intlWrapperReducer from '../components/IntlWrapper/IntlWrapperSlice';

export default configureStore({
    reducer: {
        i18n: intlWrapperReducer,
    },
});
