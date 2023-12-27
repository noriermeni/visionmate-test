import {IUser} from '@src/types';

export type RootStackParamList = {
  Home: undefined;
  Users: undefined;
  Profile: undefined | {user: IUser};
  UsersInfiniteScroll: undefined;
};
