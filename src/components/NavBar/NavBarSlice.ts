import { createSlice } from '@reduxjs/toolkit';

export type navBarState = {
    anchorElement: HTMLElement | null;
    mobileAnchorElement: HTMLElement | null;
};

const initialState = {
    anchorElement: null,
    mobileAnchorElement: null,
};

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: initialState,
    reducers: {
        openMobileMenu: (state, action) => {
            state.mobileAnchorElement = action.payload;
        },
        closeMobileMenu: (state) => {
            state.mobileAnchorElement = null;
        },
        openMenu: (state, action) => {
            state.anchorElement = action.payload;
        },
        closeMenu: (state) => {
            state.anchorElement = null;
        },
    },
});

export const isMenuOpen = (state: navBarState) => Boolean(state.anchorElement);
export const isMobileMenuOpen = (state: navBarState) =>
    Boolean(state.mobileAnchorElement);
export const { openMobileMenu, closeMobileMenu, openMenu, closeMenu } =
    navBarSlice.actions;
export default navBarSlice.reducer;
