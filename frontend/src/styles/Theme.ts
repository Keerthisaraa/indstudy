import darkScrollbar from '@mui/material/darkScrollbar';
import { createTheme } from '@mui/material/styles';
import { PrimaryColor, PrimaryFont, SecondaryColor } from '../constant';

const THEME = createTheme({
	palette: {
		primary: {
			main: PrimaryColor,
		},
		secondary: {
			main: SecondaryColor,
		},
	},
	typography: {
		fontFamily: PrimaryFont,
		fontSize: 14,
		fontWeightLight: 275,
		fontWeightRegular: 375,
		fontWeightMedium: 425,
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: darkScrollbar(),
			},
		},
	},
});

export default THEME;
