import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUsersSlice} from "./type";
import {IUser} from '@src/types';

const UsersState: IUsersSlice = {
  users: [],
};

const settingsSlice = createSlice({
  name: 'users',
  initialState: UsersState,
  reducers: {
    setUsers(state: IUsersSlice, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
    },
  },
});

export const {setUsers} = settingsSlice.actions;

export default settingsSlice.reducer;
