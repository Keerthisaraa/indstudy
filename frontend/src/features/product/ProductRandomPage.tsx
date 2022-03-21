import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import { useGetRandomProducts } from './hooks';
import ProductPreview from './ProductPreview';

function ProductRandomPage() {
	const randomProducts = useGetRandomProducts(100);

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
					{randomProducts.data &&
						randomProducts.data
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
