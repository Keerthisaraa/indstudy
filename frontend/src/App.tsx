import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './pages/HomePage';
import { GlobalStyle } from './styles/App.styles';
import { ThemeProvider } from '@mui/material/styles';
import THEME from './styles/Theme';

const App: React.FC = () => {
	// const { userToken } = useSelector(selectUser);

	return (
		<ThemeProvider theme={THEME}>
			<GlobalStyle />
			<HomePage />
			<ReactQueryDevtools initialIsOpen />
		</ThemeProvider>
	);
};

export default App;
