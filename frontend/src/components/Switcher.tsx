import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ProductDetailed from '../features/product/ProductDetailed';
import HomePage from '../pages/HomePage';

const Switcher: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/product' element={<ProductDetailed />} />
			</Routes>
		</Router>
	);
};

export default Switcher;
