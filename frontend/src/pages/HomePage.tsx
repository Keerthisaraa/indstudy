import React from 'react';
import AppBar from '../components/AppBar';
import CategoryBar from '../components/CategoryBar';
import ProductRandomPage from '../features/product/ProductRandomPage';

function HomePage() {
	return (
		<>
			<AppBar />
			<CategoryBar />
			<ProductRandomPage />
		</>
	);
}

export default HomePage;
