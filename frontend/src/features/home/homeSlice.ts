import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const initialState = {
	mode: 'random',
	searchTerm: '',
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		setMode: (state, action: PayloadAction<string>) => {
			state.mode = action.payload;
		},
		setSearchTerm: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
		},
	},
});

export const { setMode, setSearchTerm } = homeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectHome = (state: RootState) => state.home;
export default homeSlice.reducer;
