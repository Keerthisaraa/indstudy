import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductType } from './types';
import { Stack, Link, Typography } from '@mui/material';
import numeral from 'numeral';
import { setProduct } from './productSlice';
import { useNavigate } from 'react-router-dom';

function ProductPreview({ product }: { product: ProductType }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<Stack direction='column' style={{ width: '10vw', margin: 10 }}>
			<img
				src={product.image.split('|')[0]}
				alt={product.product_name}
				style={{ objectFit: 'cover', maxHeight: 150 }}
				// style={{ height: 200, width: 200 }}
			></img>
			<Link
				variant='subtitle2'
				style={{ overflow: 'hidden', color: '#007185', lineHeight: 1.25 }}
				underline='hover'
				onClick={() => {
					dispatch(setProduct(product));
					navigate('/product');
				}}
			>
				{product.product_name.length > 50
					? product.product_name.slice(0, 50) + '...'
					: product.product_name}
			</Link>
			<Typography variant='h6'>
				{numeral(product.selling_price).format('$0,0.00')}
			</Typography>
		</Stack>
	);
}

export default ProductPreview;
