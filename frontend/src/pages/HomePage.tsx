import React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '../components/AppBar';
import CategoryBar from '../components/CategoryBar';
import ProductRandomPage from '../features/product/ProductRandomPage';
import { selectHome } from '../features/home/homeSlice';
import {
	useGetRandomProducts,
	useGetSearchProducts,
} from '../features/product/hooks';
import { ProductType } from '../features/product/types';

function HomePage() {
	const { mode, searchTerm } = useSelector(selectHome);
	const randomProducts = useGetRandomProducts(100);
	const searchProducts = useGetSearchProducts(100, searchTerm);

	return (
		<>
			<AppBar />
			<CategoryBar />
			{mode === 'random' ? (
				<ProductRandomPage products={randomProducts.data as ProductType[]} />
			) : (
				<ProductRandomPage products={searchProducts.data as ProductType[]} />
			)}
		</>
	);
}

export default HomePage;
