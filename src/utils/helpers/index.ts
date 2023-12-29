import {Dimensions, Platform} from 'react-native';

const {width} = Dimensions.get('window');

export const percentWidth = (p: number) => width * (p / 100);

export function isIOS() {
  return Platform.OS === 'ios';
}

export * from './colors';
