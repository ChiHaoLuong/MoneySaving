import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  StyleSheet,
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
}

export const RootView = (props: RootViewProps) => {
  const {isScroll, style, ...customSpacingProps} = props;

  const customSpacingStyles = getCustomSpacingStyles({...customSpacingProps});

  if (isScroll) {
    return (
      <SafeAreaView style={[styles.root, customSpacingStyles, style]}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
          <ScrollView>{props.children}</ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.root, customSpacingStyles, style]}>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'android' ? -500 : 0}>
        {props.children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white[500],
  },
});
