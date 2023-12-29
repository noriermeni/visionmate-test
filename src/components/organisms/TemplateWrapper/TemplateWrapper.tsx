import React from 'react';
import {ScrollView, StyleProp, ViewStyle, View} from 'react-native';
import {colors} from '@src/utils';

interface ITemplateWrappers {
  children: React.ReactNode;
  withScroll?: boolean;
  wrapperStyle?: Partial<StyleProp<ViewStyle>>;
}

const TemplateWrapper = (props: ITemplateWrappers) => {
  const {children, wrapperStyle, withScroll} = props;
  if (withScroll) {
    return (
      <ScrollView
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: colors.background,
          ...wrapperStyle,
        }}>
        {children}
      </ScrollView>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: colors.background,
        ...wrapperStyle,
      }}>
      {children}
    </View>
  );
};

export default TemplateWrapper;
