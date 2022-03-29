import { useQuery } from 'react-query';
import { getRandomCategories } from './api';

export function useGetRandomCategories(count: number, token: string = 'test') {
	return useQuery<Array<string>, Error>(
		['randomCategories', token],
		() => getRandomCategories(count, token),
		{
			staleTime: Infinity,
		}
	);
}
