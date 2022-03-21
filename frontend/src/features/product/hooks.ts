import { useQuery } from 'react-query';
import { getRandomProducts } from './api';
import { ProductType } from './types';

export function useGetRandomProducts(count: number, token: string = 'test') {
	return useQuery<ProductType[], Error>(
		['randomProducts', token],
		() => getRandomProducts(count, token),
		{
			refetchInterval: Infinity,
		}
	);
}
