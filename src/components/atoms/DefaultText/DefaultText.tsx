import {Text, StyleProp, TextStyle, TextProps} from 'react-native';
import {colors} from '@src/utils';

export interface IDefaultText extends Partial<TextProps> {
  size?: 'small' | 'medium' | 'large';
  styleText?: Partial<StyleProp<TextStyle>>;
}

const DefaultText = (props: IDefaultText) => {
  const {size = 'small', children, styleText, ...otherProps} = props;

  let fontSize = 16;
  let fontWeight: TextStyle['fontWeight'] = '400';

  if (size === 'large') {
    fontSize = 20;
    fontWeight = '600';
  } else if (size === 'medium') {
    fontSize = 18;
    fontWeight = '500';
  }

  return (
    <Text
      {...otherProps}
      style={{fontSize, fontWeight, color: colors.text, ...styleText}}>
      {children}
    </Text>
  );
};

export default DefaultText;
