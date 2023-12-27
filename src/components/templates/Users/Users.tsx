import {IUsersList, TemplateWrapper, UsersList} from '@src/components';

interface Props extends IUsersList {}

const Users = (props: Props) => {
  return (
    <TemplateWrapper>
      <UsersList {...props} />
    </TemplateWrapper>
  );
};

export default Users;
