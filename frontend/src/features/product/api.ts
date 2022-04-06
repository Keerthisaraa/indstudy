import axios from 'axios';
import { BACKEND_URL } from '../../constant';

export const getRandomProducts = async (count: number, token: string) => {
	const response = await axios({
		method: 'get',
		url: BACKEND_URL + '/products/random',
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

export const getSearchProducts = async (
	count: number,
	searchTerm: string,
	token: string
) => {
	const response = await axios({
		method: 'get',
		url: BACKEND_URL + '/products/search',
		params: {
			search_string: searchTerm,
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
