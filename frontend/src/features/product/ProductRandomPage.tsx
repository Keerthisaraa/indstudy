import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import ProductPreview from './ProductPreview';
import { ProductType } from './types';

function ProductRandomPage({ products }: { products: Array<ProductType> }) {
	return (
		<Container style={{ marginTop: 25 }}>
			<Paper>
				<Grid
					container
					direction='row'
					spacing={2}
					alignItems='center'
					justifyContent='center'
				>
					{products &&
						products
							.filter((product) => product.selling_price > 0)
							.map((product) => (
								<Grid item>
									<ProductPreview product={product} />
								</Grid>
							))}
				</Grid>
			</Paper>
		</Container>
	);
}

export default ProductRandomPage;
