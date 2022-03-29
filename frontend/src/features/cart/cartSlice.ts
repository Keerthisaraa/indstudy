import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface OrderProduct {
	id: string;
	count: number;
}
export interface CartState {
	cart: Array<OrderProduct>;
}

const initialState: CartState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<OrderProduct>) => {
			state.cart.push(action.payload);
		},
	},
});

export const { addProduct } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
