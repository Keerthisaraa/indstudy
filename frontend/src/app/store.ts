import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import productReducer from '../features/product/productSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
	reducer: {
		product: productReducer,
		user: userReducer,
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
