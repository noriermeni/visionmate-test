import {TouchableOpacity, View} from 'react-native';
import {DefaultText, Profile} from '@src/components';
import {useDefaultNavigation} from '@src/navigators';
import {colors} from '@src/utils';
import {IUser} from '@src/types';

export interface IUsersListItem extends IUser {}

const UsersListItem = (props: IUsersListItem) => {
  const {name, picture, location, email} = props;
  const {navigate} = useDefaultNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: 'row',
      }}
      onPress={() => navigate('Profile', {user: props})}>
      <Profile url={picture.medium} />
      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 10,
          paddingRight: 10,
          flex: 1,
        }}>
        <DefaultText
          ellipsizeMode="tail"
          size="medium"
          styleText={{marginBottom: 10}}>
          {name.title}. {name.first} {name.last}
        </DefaultText>
        <DefaultText
          ellipsizeMode="tail"
          size="small"
          styleText={{marginBottom: 5}}>
          City: {location.city}
        </DefaultText>
        <DefaultText
          numberOfLines={1}
          ellipsizeMode="tail"
          size="small"
          styleText={{marginBottom: 5}}>
          Email: {email}
        </DefaultText>
      </View>
    </TouchableOpacity>
  );
};

export default UsersListItem;
