import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from '../components/ColorMode/ColorModeSlice';

import intlWrapperReducer from '../components/IntlWrapper/IntlWrapperSlice';

import userProfileReducer from '../features/userProfile/userProfileSlice';

const store = configureStore({
    reducer: {
        i18n: intlWrapperReducer,
        colorMode: colorModeReducer,
        userProfile: userProfileReducer,
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
