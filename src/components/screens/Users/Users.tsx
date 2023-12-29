import {useState} from 'react';
import {useAppSelector} from '@src/store';
import {UsersTemplate} from '@src/components';
import {IUser} from '@src/types';

const Users = () => {
  const {users} = useAppSelector(state => state.users);
  const [filteredUsers, setFilteredUsers] = useState<Array<IUser>>(users);

  const filterUsers = (searchString: string) => {
    return users.filter((user: IUser) => {
      return (
        user.name.first.toLowerCase().includes(searchString.toLowerCase()) ||
        user.location.city.toLowerCase().includes(searchString.toLowerCase())
      );
    });
  };

  const _onSearch = async (text: string) => {
    if (text.length === 0) {
      setFilteredUsers(users);
    }
    const value = filterUsers(text);
    setFilteredUsers(value);
  };

  return <UsersTemplate users={filteredUsers} onSearch={_onSearch} />;
};

export default Users;
