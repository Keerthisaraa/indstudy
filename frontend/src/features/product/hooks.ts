import { useQuery } from 'react-query';
import { getRandomProducts, getSearchProducts } from './api';
import { ProductType } from './types';

export function useGetRandomProducts(count: number, token: string = 'test') {
	return useQuery<ProductType[], Error>(
		['randomProducts', token],
		() => getRandomProducts(count, token),
		{
			staleTime: Infinity,
		}
	);
}

export function useGetSearchProducts(
	count: number,
	searchTerm: string,
	token: string = 'test'
) {
	return useQuery<ProductType[], Error>(
		['searchProducts', searchTerm],
		() => getSearchProducts(count, searchTerm, token),
		{
			staleTime: Infinity,
		}
	);
}
