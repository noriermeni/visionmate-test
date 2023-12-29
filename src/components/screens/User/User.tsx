import {useRoute, RouteProp, ParamListBase} from '@react-navigation/native';
import {UserTemplate} from '@src/components';
import {IUser} from '@src/types';

const User = () => {
  const route = useRoute<RouteProp<ParamListBase, 'Profile'>>();
  // @ts-ignore
  const user: IUser = route?.params?.user;

  return <UserTemplate {...user} />;
};

export default User;
