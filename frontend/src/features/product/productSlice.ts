import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ProductType } from './types';

export interface ProductState {
	product: ProductType;
}

const initializeProduct = (): ProductType => {
	return {
		id: '',
		product_name: '',
		selling_price: 0,
		about_product: '',
		product_specification: '',
		image: '',
	};
};

const initialState: ProductState = {
	product: initializeProduct(),
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProduct: (state, action: PayloadAction<ProductType>) => {
			state.product = action.payload;
		},
	},
});

export const { setProduct } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProduct = (state: RootState) => state.product;
export default productSlice.reducer;
