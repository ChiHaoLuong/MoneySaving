import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
  ColorValue,
  LayoutChangeEvent,
} from 'react-native';
import React from 'react';
import {CustomText, View} from '../';
import {
  CustomSpacingProps,
  getCustomSpacingStyles,
} from '../../utils/interfaces';

interface ButtonComponentProps extends CustomSpacingProps {
  containerStyles?: StyleProp<ViewStyle>;
  title?: string;
  titleStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  btnColor?: ColorValue;
  titleColor?: ColorValue;
  titleSize?: number;
  onLayout?: (event: LayoutChangeEvent) => void;
  iconLeft?: JSX.Element | React.ReactNode;
  iconRight?: JSX.Element | React.ReactNode;
  icon?: JSX.Element | React.ReactNode;
}

export const CustomButton = (props: ButtonComponentProps) => {
  const {
    title,
    containerStyles,
    titleStyles,
    onPress,
    btnColor,
    titleColor,
    titleSize,
    onLayout,
    icon,
    iconLeft,
    iconRight,
    ...customSpacingProps
  } = props;

  const customSpacingStyle = getCustomSpacingStyles({...customSpacingProps});

  const containerDefaultStyles: StyleProp<ViewStyle>[] = [
    btnColor ? {backgroundColor: btnColor} : {},
  ];

  const onPressHandle = () => {
    onPress && onPress();
  };

  if (icon) {
    return (
      <TouchableOpacity
        onLayout={onLayout}
        onPress={onPressHandle}
        style={[
          styles.container,
          containerDefaultStyles,
          customSpacingStyle,
          containerStyles,
        ]}>
        {icon}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onLayout={onLayout}
      onPress={onPressHandle}
      style={[
        styles.container,
        containerDefaultStyles,
        customSpacingStyle,
        containerStyles,
      ]}>
      {(iconLeft || iconRight) && (
        <View
          width={32}
          height={32}
          justifyContent="center"
          alignItems="center">
          {iconLeft}
        </View>
      )}
      <CustomText
        color={titleColor}
        size={titleSize}
        style={[styles.title, titleStyles]}
        text={title || ''}
      />
      {(iconLeft || iconRight) && (
        <View
          width={32}
          height={32}
          justifyContent="center"
          alignItems="center">
          {iconRight}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
  },
});
