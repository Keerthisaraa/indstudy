import axios from 'axios';
import querystring from 'querystring';
import { BACKEND_URL } from '../../constant';

export const login = async (username: string, password: string) => {
	const instance = axios.create();

	const data = querystring.stringify({
		grant_type: null,
		username: username,
		password: password,
		scope: null,
		client_id: null,
		client_secret: null,
	});
	const response = await instance({
		method: 'post',
		url: BACKEND_URL + '/login',
		data: data,
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	return response;
};
