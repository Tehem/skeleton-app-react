import { User } from '@auth0/auth0-react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserById } from '../../api/User';

export const loadUser = createAsyncThunk(
    'userProfile/fetchUserById',
    async (props: { userId: string; token: string }, thunkAPI) => {
        const user = await fetchUserById(props.token, props.userId);
        return user as User;
    }
);

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        user: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUser.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});

export default userProfileSlice.reducer;
