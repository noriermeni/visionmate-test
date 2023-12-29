import {
  IUsersList,
  NotFound,
  SearchBox,
  UsersList,
  TemplateWrapper,
} from '@src/components';

interface Props extends IUsersList {
  onSearch?(text: string): void;
}

const Users = ({onSearch, ...props}: Props) => {
  return (
    <TemplateWrapper>
      {!!onSearch && (
        <SearchBox
          fieldStyle={{marginBottom: 10}}
          placeholder="Search users..."
          onSearch={onSearch}
        />
      )}
      {props.users.length === 0 && (
        <NotFound message="No users were found to display!" />
      )}
      <UsersList {...props} />
    </TemplateWrapper>
  );
};

export default Users;
