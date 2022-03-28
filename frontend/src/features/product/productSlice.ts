import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProductState {
	view: 'list' | 'detail';
	productID: string;
}

const initialState: ProductState = {
	view: 'list',
	productID: '',
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductID: (state, action: PayloadAction<string>) => {
			state.productID = action.payload;
			state.view = 'detail';
		},
	},
});

export const { setProductID } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProduct = (state: RootState) => state.product;
export default productSlice.reducer;
