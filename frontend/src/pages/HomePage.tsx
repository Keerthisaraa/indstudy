import React from 'react';
import AppBar from '../components/AppBar';
import CategoryBar from '../components/CategoryBar';
import ProductPreview from '../features/product/ProductPreview';
import { productPreviewSample } from '../features/product/sample';
import { Stack } from '@mui/material';

function HomePage() {
	return (
		<>
			<AppBar />
			<CategoryBar />
			<div style={{ margin: 20 }}>
				<Stack direction='row'>
					{productPreviewSample.map((product) => (
						<ProductPreview product={product} />
					))}
				</Stack>
			</div>
		</>
	);
}

export default HomePage;
