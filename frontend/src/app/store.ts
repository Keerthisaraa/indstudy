import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import homeReducer from '../features/home/homeSlice';
import productReducer from '../features/product/productSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		product: productReducer,
		user: userReducer,
		cart: cartReducer,
		home: homeReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
