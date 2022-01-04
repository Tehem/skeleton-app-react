import { createSlice } from '@reduxjs/toolkit';

export type profileMenuState = {
    anchorElement: HTMLElement | null;
};

const initialState = {
    anchorElement: null,
};

export const profileMenuSlice = createSlice({
    name: 'profileMenu',
    initialState: initialState,
    reducers: {
        openMenu: (state, action) => {
            state.anchorElement = action.payload;
        },
        closeMenu: (state) => {
            state.anchorElement = null;
        },
    },
});

export const isMenuOpen = (state: profileMenuState) =>
    Boolean(state.anchorElement);
export const selectAnchorElement = (state: profileMenuState) =>
    state.anchorElement;
export const { openMenu, closeMenu } = profileMenuSlice.actions;
export default profileMenuSlice.reducer;
