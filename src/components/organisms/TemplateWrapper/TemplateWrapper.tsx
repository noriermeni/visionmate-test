import React from 'react';
import {ScrollView, View} from 'react-native';
import {colors} from '@src/utils';

interface ITemplateWrappers {
  children: React.ReactNode;
  withScroll?: boolean;
}

const TemplateWrapper = ({children, withScroll}: ITemplateWrappers) => {
  if (withScroll) {
    return (
      <ScrollView
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: colors.background,
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
      }}>
      {children}
    </View>
  );
};

export default TemplateWrapper;
