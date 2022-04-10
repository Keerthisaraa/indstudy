import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '../components/AppBar';
import { Chip, Stack, Typography, Container, Paper, Grid } from '@mui/material';
import CategoryBar from '../components/CategoryBar';
import { useGetOrderProduct } from '../features/order/hooks';
import { selectUser } from '../features/user/userSlice';
import { OrderProduct } from '../features/order/types';
// User -> Multiple orders -> Products

const OrderProductView = ({ product }: { product: OrderProduct }) => {
	return (
		<Paper style={{ width: 800 }}>
			<Stack direction='row' alignItems='center' spacing={2}>
				<img
					src={product.image.split('|')[0]}
					alt={product.product_name}
					// style={{ objectFit: 'cover', maxHeight: 100 }}
					style={{ height: 200, width: 200 }}
				></img>
				<Stack direction='column'>
					<Typography variant='h6'>{product.product_name}</Typography>
					<Typography>{product.order_date}</Typography>
					<Typography variant='button'>{product.order_status}</Typography>
				</Stack>
			</Stack>
		</Paper>
	);
};

function OrderDetails() {
	const { user, userToken } = useSelector(selectUser);
	const { user_id } = user;
	const userOrders = useGetOrderProduct(user_id, userToken);

	return (
		<>
			<AppBar />
			<CategoryBar />
			<Container style={{ marginTop: 25 }}>
				{userOrders.data &&
					userOrders.data.map((product) => (
						<Stack
							direction='row'
							spacing={2}
							alignItems='center'
							justifyContent='center'
						>
							<OrderProductView product={product} />
							{/* <Typography>Test</Typography> */}
						</Stack>
					))}
			</Container>
		</>
	);
}

export default OrderDetails;
