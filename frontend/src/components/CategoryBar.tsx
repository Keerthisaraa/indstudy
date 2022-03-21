import React from 'react';
import { Stack, Paper, Button, Typography } from '@mui/material';
import { useGetRandomCategories } from './hooks';

function CategoryBar() {
	const { data } = useGetRandomCategories(10);
	console.log(data);
	return (
		<Paper style={{ backgroundColor: '#232F3D' }}>
			<Stack
				direction='row'
				alignItems='space-between'
				justifyContent='space-between'
				spacing={2}
			>
				{data &&
					data.map((category) => (
						<Button style={{ color: 'white', textTransform: 'none' }}>
							<Typography variant='body2' style={{ fontSize: 14 }}>
								{category}
							</Typography>
						</Button>
					))}
			</Stack>
		</Paper>
	);
}

export default CategoryBar;
