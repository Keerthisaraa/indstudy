import axios from 'axios';
import { BACKEND_URL } from '../constant';

export const getRandomCategories = async (
	count: number,
	token: string = 'test'
) => {
	const response = await axios({
		method: 'get',
		url: BACKEND_URL + '/categories/random',
		params: {
			count,
		},
		headers: {
			accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	return response.data;
};
