import {View} from 'react-native';
import {DefaultText, NotFound, Profile, TemplateWrapper} from '@src/components';
import {IUser} from '@src/types';

const User = (props: IUser) => {
  const {login, name, picture, location, email} = props;

  if (!name && !login && !location && !picture) {
    return (
      <TemplateWrapper>
        <NotFound message="The user does not exist" />
      </TemplateWrapper>
    );
  }
  return (
    <TemplateWrapper withScroll>
      <Profile useScreenWidth url={picture?.large} />
      <View style={{flexDirection: 'column', paddingVertical: 10}}>
        <DefaultText
          ellipsizeMode="tail"
          size="large"
          styleText={{marginBottom: 10}}>
          {name?.title}. {name.first} {name.last}
        </DefaultText>
        <DefaultText
          ellipsizeMode="tail"
          size="small"
          styleText={{marginBottom: 5}}>
          Username: {login.username}
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
    </TemplateWrapper>
  );
};

export default User;
