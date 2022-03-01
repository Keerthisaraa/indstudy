import React from 'react';
import { Stack, Paper, Button } from '@mui/material';

function CategoryBar() {
	const categories = [
		'Toys',
		'Clothes',
		'Food',
		'Electronics',
		'Books',
		'Other',
		'Toys',
		'Clothes',
		'Food',
		'Electronics',
		'Books',
		'Other',
		'Clothes',
		'Food',
		'Electronics',
		'Books',
		'Other',
	];

	return (
		<Paper>
			<Stack
				direction='row'
				alignItems='space-between'
				justifyContent='space-between'
				spacing={2}
			>
				{categories.map((category) => (
					<Button variant='outlined'>{category}</Button>
				))}
			</Stack>
		</Paper>
	);
}

export default CategoryBar;
