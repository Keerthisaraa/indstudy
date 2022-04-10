import { useQuery } from 'react-query';
import { getUserOrders } from './api';
import { OrderProduct } from './types';

export function useGetOrderProduct(user_id: string, token: string = 'test') {
	return useQuery<OrderProduct[], Error>(
		['orderProduct', user_id],
		() => getUserOrders(user_id, token),
		{
			staleTime: Infinity,
		}
	);
}
