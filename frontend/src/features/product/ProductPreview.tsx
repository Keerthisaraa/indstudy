import React from 'react';
import { ProductType } from './types';
import { Stack, Link, Typography } from '@mui/material';

function ProductPreview({ product }: { product: ProductType }) {
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
			>
				{product.product_name.length > 50
					? product.product_name.slice(0, 50) + '...'
					: product.product_name}
			</Link>
			<Typography variant='h6'>${product.selling_price}</Typography>
		</Stack>
	);
}

export default ProductPreview;
