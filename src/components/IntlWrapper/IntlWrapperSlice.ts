import messages from '../../lang';
import getLocale from '../../lang/detect-locale';
import { createSlice } from '@reduxjs/toolkit';

const locale = getLocale();
const initialState = {
    locale: locale,
    messages: messages[locale],
};

export const intlWrapperSlice = createSlice({
    name: 'i18n',
    initialState: initialState,
    reducers: {
        switchLocale: (state, action) => {
            const locale = action.payload;
            const localeMessages = messages[locale];
            return {
                ...state,
                locale,
                messages: localeMessages,
            };
        },
    },
});

export const { switchLocale } = intlWrapperSlice.actions;
export default intlWrapperSlice.reducer;
