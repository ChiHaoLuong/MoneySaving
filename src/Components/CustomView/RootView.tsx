import {
  ColorValue,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../Theme';
import {
  CustomSpacingProps,
  getCustomSpacingStyles,
} from '../../utils/interfaces';

interface RootViewProps extends CustomSpacingProps {
  isScroll?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
  backgroundColor?: ColorValue;
}

export const RootView = (props: RootViewProps) => {
  const {isScroll, style, backgroundColor, ...customSpacingProps} = props;

  const customSpacingStyles = getCustomSpacingStyles({...customSpacingProps});
  const rootStyles: StyleProp<ViewStyle> = {
    backgroundColor: backgroundColor || colors.white[500],
    flex: 1,
  };

  if (isScroll) {
    return (
      <SafeAreaView style={[rootStyles, customSpacingStyles, style]}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
          <ScrollView>{props.children}</ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[rootStyles, customSpacingStyles, style]}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
