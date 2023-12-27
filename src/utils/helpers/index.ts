import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export const percentWidth = (p: number) => width * (p / 100);

export const percentHeight = (p: number) => height * (p / 100);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export function isIOS() {
  return Platform.OS === 'ios';
}

export * from './colors';
