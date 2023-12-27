import {Image, View} from 'react-native';
import {colors, percentWidth} from '@src/utils';

export interface IProfile {
  url: string;
  useScreenWidth?: boolean;
}

const Profile = (props: IProfile) => {
  const {url, useScreenWidth} = props;

  const width: number = useScreenWidth
    ? percentWidth(100) - 20
    : (percentWidth(100) - 20) / 4;

  return (
    <View
      style={{
        width,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.border,
        overflow: 'hidden',
      }}>
      <Image source={{uri: url}} width={width} height={width} />
    </View>
  );
};

export default Profile;
