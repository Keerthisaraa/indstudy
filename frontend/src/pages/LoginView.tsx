import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/api';
import { setLoginData } from '../features/user/userSlice';
import { Grid, Typography, TextField, Button } from '@mui/material';
import AmazonLogo from '../assets/logo.png';
import { PrimaryColor } from '../constant';

const LoginView = () => {
	const textBoxWidth = 250;
	const dispatch = useDispatch();

	const [username, setUserName] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const submitLogin = async () => {
		const loginData = await login(username, password);
		if (loginData === undefined) {
			return undefined;
		}
		const { data } = loginData;
		const { token, user } = data;
		const userObject = {
			//@ts-ignore
			email_id: user.email_id,
			//@ts-ignore
			full_name: user.full_name,
		};
		if (loginData) {
			dispatch(setLoginData({ user: userObject, userToken: token }));
		}
	};

	return (
		<Grid
			container
			direction='column'
			alignItems='center'
			spacing={1}
			justifyContent='center'
			style={{ height: '100%' }}
		>
			<Grid
				item
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					top: '40%',
				}}
			>
				<img
					src={AmazonLogo}
					className='imgLogo'
					alt=''
					style={{ width: 250, height: 125 }}
				/>
			</Grid>
			<Grid item>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
			</Grid>
			<Grid item>
				<TextField
					variant='outlined'
					margin='normal'
					required
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
					autoFocus
					onChange={(event: any) => setUserName(event.target.value)}
					style={{ width: textBoxWidth }}
				/>
			</Grid>
			<Grid item>
				<TextField
					variant='outlined'
					margin='normal'
					required
					fullWidth
					type='password'
					id='password'
					label='Password'
					name='password'
					autoComplete='password'
					autoFocus
					onChange={(event: any) => setPassword(event.target.value)}
					style={{ width: textBoxWidth }}
				/>
			</Grid>
			<Grid item alignItems='center' justifyContent='center'>
				<Button
					type='submit'
					style={{ width: textBoxWidth / 2, backgroundColor: PrimaryColor }}
					variant='contained'
					color='primary'
					onClick={submitLogin}
				>
					Submit
				</Button>
			</Grid>
		</Grid>
	);
};

export default LoginView;
