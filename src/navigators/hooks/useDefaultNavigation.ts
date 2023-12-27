import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '.';

export const useDefaultNavigation = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
