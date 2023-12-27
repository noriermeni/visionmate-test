import {TextStyle, ViewStyle, StyleProp, TouchableOpacity} from 'react-native';
import {colors, percentWidth} from '@src/utils';
import {DefaultText} from '@src/components';

export interface IDefaultButton {
  title: string;
  textStyle?: Partial<StyleProp<TextStyle>>;
  containerStyle?: Partial<StyleProp<ViewStyle>>;

  onPress(): void;
}

const DefaultButton = (props: IDefaultButton) => {
  const {onPress, title, textStyle, containerStyle} = props;

  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.border,
        backgroundColor: colors.button,
        paddingVertical: percentWidth(5),
        ...containerStyle,
      }}
      onPress={onPress}
      activeOpacity={0.8}>
      <DefaultText styleText={{textAlign: 'center', ...textStyle}}>
        {title}
      </DefaultText>
    </TouchableOpacity>
  );
};

export default DefaultButton;
