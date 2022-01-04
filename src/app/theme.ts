import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = (colorMode: PaletteMode | undefined) =>
    createTheme({ palette: { mode: colorMode } });

export default theme;
