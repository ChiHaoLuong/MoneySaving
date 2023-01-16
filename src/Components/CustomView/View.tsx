import {
  View as RNView,
  StyleProp,
  ViewStyle,
  ColorValue,
  LayoutChangeEvent,
} from 'react-native';
import React from 'react';
import {
  CustomSpacingProps,
  getCustomSpacingStyles,
} from '../../utils/interfaces';

interface ViewComponentProps extends CustomSpacingProps {
  style?: StyleProp<ViewStyle>;
  backgroundColor?: ColorValue;
  children?: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactNode[];
  onLayout?: (event: LayoutChangeEvent) => void;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const View = (props: ViewComponentProps) => {
  const {
    style,
    backgroundColor,
    children,
    onLayout,
    flexDirection,
    ...customSpacingProps
  } = props;

  const defaultStyle = getCustomSpacingStyles({...customSpacingProps});
  const colorStyles: StyleProp<ViewStyle>[] = [
    backgroundColor ? {backgroundColor} : {},
    flexDirection ? {flexDirection} : {},
  ];

  return (
    <RNView onLayout={onLayout} style={[defaultStyle, colorStyles, style]}>
      {children}
    </RNView>
  );
};
