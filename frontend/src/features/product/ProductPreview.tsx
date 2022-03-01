import React from 'react';
import { ProductPreviewType } from './types';
import { Paper, Stack, Typography } from '@mui/material';

function ProductPreview({ product }: { product: ProductPreviewType }) {
	return (
		<Stack direction='column'>
			<img
				src={product.image}
				alt={product.name}
				style={{ height: 200, width: 200 }}
			></img>
			<Typography variant='subtitle2'>{product.name}</Typography>
			<Typography variant='subtitle1'>${product.price}</Typography>
		</Stack>
	);
}

export default ProductPreview;
