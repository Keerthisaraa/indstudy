import axios from 'axios';
import { BACKEND_URL } from '../../constant';

export const getUserOrders = async (user_id: string, token: string) => {
	const response = await axios({
		method: 'get',
		url: BACKEND_URL + '/orders',
		params: {
			user_id,
		},
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};
