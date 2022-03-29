import React, { useState } from 'react';
import {
	TextField,
	Button,
	Card,
	Stack,
	Container,
	Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectProduct } from './productSlice';
import { PrimaryDarkColor, PrimaryDarkerColor } from '../../constant';
import { ProductType } from './types';
import numeral from 'numeral';
import AppBar from '../../components/AppBar';
import CategoryBar from '../../components/CategoryBar';
import { useDispatch } from 'react-redux';

const ProductImage = ({ images }: { images: Array<string> }) => {
	images = images.slice(0, images.length - 1);
	const [mainImage, setMainImage] = useState(images[0]);

	return (
		<Stack
			direction='column'
			alignItems='center'
			spacing={2}
			justifyContent='center'
			style={{ height: 600, width: 600, overflow: 'auto' }}
		>
			<img
				src={mainImage}
				alt={mainImage}
				style={{ objectFit: 'cover', height: 400, width: 400 }}
			></img>
			<Stack
				direction='row'
				alignItems='center'
				justifyContent='center'
				spacing={2}
			>
				{images.map((image) => (
					<Card
						onMouseEnter={() => setMainImage(image)}
						style={{
							borderStyle: 'solid',
							borderColor:
								mainImage === image ? PrimaryDarkColor : 'transparent',
							borderWidth: 0.01,
						}}
					>
						<img
							src={image}
							alt={image}
							style={{ objectFit: 'cover', height: 100, width: 100 }}
						></img>
					</Card>
				))}
			</Stack>
		</Stack>
	);
};

const ProductOrder = () => {
	const [productCount, setProductCount] = useState(1);
	const dispatch = useDispatch();

	return (
		<Stack
			direction='row'
			alignItems='center'
			justifyContent='center'
			spacing={2}
		>
			<TextField
				value={productCount}
				onChange={(event: any) => setProductCount(event.target.value)}
				type='number'
				size='small'
				inputProps={{ min: 1 }}
				style={{ width: 75 }}
			></TextField>
			<Button
				size='small'
				variant='contained'
				style={{ width: 150, textTransform: 'none' }}
			>
				<Typography variant='body2'>Add to Cart</Typography>
			</Button>
		</Stack>
	);
};

const ProductDescription = ({ product }: { product: ProductType }) => {
	return (
		<Stack
			direction='column'
			spacing={1}
			style={{ height: 600, width: 600, overflow: 'auto' }}
			justifyContent='center'
		>
			<Typography variant='h5'>{product.product_name}</Typography>
			<Typography
				variant='h6'
				color='primary'
				style={{ color: PrimaryDarkerColor }}
			>
				Price: {numeral(product.selling_price).format('$0,0.00')}
			</Typography>
			<Typography variant='body1' style={{ fontWeight: 'bold' }}>
				Product Description
			</Typography>
			<Stack direction='column'>
				{product.about_product.split('|').map((specification) => (
					<Typography variant='body1'>• {specification}</Typography>
				))}
			</Stack>
			<ProductOrder />
		</Stack>
	);
};

const ProductDetailed = () => {
	const { product } = useSelector(selectProduct);

	return (
		<>
			<AppBar />
			<CategoryBar />
			<Container maxWidth='lg' style={{ marginTop: 30 }}>
				<Stack
					direction='row'
					alignItems='center'
					justifyContent='center'
					spacing={2}
				>
					<ProductImage images={product.image.split('|')} />
					<ProductDescription product={product} />
				</Stack>
			</Container>
		</>
	);
};

export default ProductDetailed;
