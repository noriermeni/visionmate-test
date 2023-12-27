import {ActivityIndicator, FlatList} from 'react-native';
import {UsersListItem} from '@src/components';
import {IUser} from '@src/types';

export interface IUsersList {
  users: IUser[];
  isLoading?: boolean;
  hasMoreData?: boolean;
  isFirstPageReceived?: boolean;

  fetchMoreData?(): void;
}

const UsersList = (props: IUsersList) => {
  const {fetchMoreData, users, hasMoreData, isFirstPageReceived, isLoading} =
    props;

  const _renderItem = ({item}: {item: IUser}) => <UsersListItem {...item} />;

  const _fetchMoreData = () => {
    if (!hasMoreData) {
      return;
    }
    if (fetchMoreData) {
      fetchMoreData();
    }
  };

  const _footerList = () => {
    if (!isFirstPageReceived && isLoading) {
      return <ActivityIndicator size="large" />;
    }
    return <></>;
  };

  if (!isFirstPageReceived && isLoading) {
    return <ActivityIndicator size="small" />;
  }
  return (
    <FlatList
      data={users}
      renderItem={_renderItem}
      onEndReached={_fetchMoreData}
      onEndReachedThreshold={0.8}
      ListFooterComponent={_footerList()}
    />
  );
};

export default UsersList;
