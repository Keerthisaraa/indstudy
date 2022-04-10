import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface UserDetails {
	user_id: string;
	email_id: string;
	full_name: string;
}
export interface UserState {
	user: UserDetails;
	userToken: string;
}

const initialState: UserState = {
	user: { user_id: '', email_id: '', full_name: '' },
	userToken: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setLoginData: (state, { payload }: PayloadAction<UserState>) => {
			state.user = payload.user;
			state.userToken = payload.userToken;
		},
	},
});

export const { setLoginData } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
