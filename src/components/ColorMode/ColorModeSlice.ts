import { createSlice } from '@reduxjs/toolkit';

export type colorModeState = {
    colorMode: {
        mode: string;
    };
};

const initialState = {
    mode: 'light',
};

export const colorModSlice = createSlice({
    name: 'colorMode',
    initialState: initialState,
    reducers: {
        switchMode: (state) => {
            const newColorMode = state.mode === 'light' ? 'dark' : 'light';
            return {
                ...state,
                mode: newColorMode,
            };
        },
    },
});

export const selectColorMode = (state: colorModeState) => state.colorMode.mode;
export const { switchMode } = colorModSlice.actions;
export default colorModSlice.reducer;
