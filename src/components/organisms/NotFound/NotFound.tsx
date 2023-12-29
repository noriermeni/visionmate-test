import {View} from 'react-native';
import {DefaultText} from '@src/components';

interface INotFound {
  message: string;
}

const NotFound = ({message}: INotFound) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <DefaultText size="medium">{message}</DefaultText>
    </View>
  );
};

export default NotFound;
