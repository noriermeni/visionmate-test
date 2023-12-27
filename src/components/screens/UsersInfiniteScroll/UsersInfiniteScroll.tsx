import {useEffect, useState} from 'react';
import {getUsersWithPagination} from '@src/services';
import {UsersTemplate} from '@src/components';
import {IUser} from '@src/types';

const RESULTS: number = 20;

const UsersInfiniteScroll = () => {
  const [page, setPage] = useState<number>(1);
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFirstPageReceived, setIsFirstPageReceived] =
    useState<boolean>(false);

  useEffect(() => {
    getUsersWithPagination(page, RESULTS).then((res: any) => {
      setUsers(res.results);
      setIsLoading(false);
      setIsFirstPageReceived(true);
    });
  }, []);

  const _fetchMoreData = () => {
    setIsLoading(true);
    getUsersWithPagination(page, RESULTS).then((res: any) => {
      setPage((prevState: number) => prevState++);
      setUsers((prevState: IUser[]) => [...prevState, ...res.results]);
      setIsLoading(false);
    });
  };

  return (
    <UsersTemplate
      users={users}
      isLoading={isLoading}
      fetchMoreData={_fetchMoreData}
      hasMoreData={users.length < 200}
      isFirstPageReceived={isFirstPageReceived}
    />
  );
};

export default UsersInfiniteScroll;
