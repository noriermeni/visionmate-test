import {UsersTemplate} from '@src/components';
import {useAppSelector} from '@src/store';

const Users = () => {
  const {users} = useAppSelector(state => state.users);

  return <UsersTemplate users={users} />;
};

export default Users;
