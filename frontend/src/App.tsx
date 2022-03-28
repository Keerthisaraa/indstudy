import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from './styles/App.styles';
import { ThemeProvider } from '@mui/material/styles';
import Switcher from './components/Switcher';
import LoginView from './pages/LoginView';
import THEME from './styles/Theme';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

const App: React.FC = () => {
	const { userToken } = useSelector(selectUser);
	console.log(userToken === '');

	return (
		<ThemeProvider theme={THEME}>
			<GlobalStyle />
			{userToken === '' ? <LoginView /> : <Switcher />}
			<ReactQueryDevtools initialIsOpen />
		</ThemeProvider>
	);
};

export default App;
