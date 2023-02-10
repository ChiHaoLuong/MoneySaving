import {
  ColorValue,
  LayoutChangeEvent,
  StyleProp,
  Text as RNText,
  TextStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../../Theme';
import {CustomSpacingProps, getCustomSpacingStyles} from '../../utils';

interface TextComponentProps extends CustomSpacingProps {
  text: string;
  color?: ColorValue;
  size?: number;
  fontWeight?: TextStyle['fontWeight'];
  style?: StyleProp<TextStyle>;
  lineHeight?: number;
  // TextProps
  numberOfLines?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const CustomText = (props: TextComponentProps) => {
  const {
    color,
    fontWeight,
    size,
    text,
    style,
    lineHeight,
    numberOfLines,
    onLayout,
    textAlign,
    ...customSpacingProps
  } = props;

  const customSpacingStyle = getCustomSpacingStyles({...customSpacingProps});

  const defaultStyle: StyleProp<TextStyle>[] = [
    {color: color || colors.black[500]},
    size ? {fontSize: size} : {},
    fontWeight ? {fontWeight} : {},
    lineHeight ? {lineHeight} : {},
    textAlign ? {textAlign} : {},
  ];

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[defaultStyle, customSpacingStyle, style]}
      onLayout={onLayout}>
      {text}
    </RNText>
  );
};
