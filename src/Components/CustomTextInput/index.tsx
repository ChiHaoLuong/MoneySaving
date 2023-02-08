/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  TextInput,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Platform,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {CustomText, View} from '../';
import {CustomSpacingProps, getCustomSpacingStyles} from 'utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'Theme';

interface ICustomTextInput extends CustomSpacingProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  value: string;
  setValue: (val: string) => void;
  error?: string;
  isPassword?: boolean;
  iconRight?: JSX.Element | React.ReactNode;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  fontSize?: number;
  placeholder?: string;
}

export const CustomTextInput = (props: ICustomTextInput) => {
  const {
    containerStyle,
    inputStyle,
    setValue,
    value,
    isPassword,
    iconRight,
    onBlur,
    fontSize,
    placeholder,
    error,
    ...customSpacingProps
  } = props;

  const [isShowPass, setIsShowPass] = useState<boolean>(
    isPassword === true ? false : true,
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const defaultStyle = getCustomSpacingStyles({...customSpacingProps});

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false);
    onBlur && onBlur(e);
  };

  const borderBottomColor = useMemo(() => {
    if (error) {
      return 'red';
    } else if (isFocus) {
      return colors.green;
    } else {
      return colors.gray[600];
    }
  }, [error, isFocus]);

  return (
    <>
      <View
        width={'100%'}
        flexDirection="row"
        justifyContent="center"
        pt={8}
        pb={Platform.OS === 'ios' ? 4 : 0}
        borBW={1}
        borBColor={borderBottomColor}
        alignItems="center"
        ph={isPassword || iconRight ? 14 : 0}
        style={[defaultStyle, containerStyle]}>
        <TextInput
          style={[
            {
              width: '100%',
            },
            {fontSize},
            inputStyle,
          ]}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={setValue}
          secureTextEntry={!isShowPass}
          onBlur={handleBlur}
          placeholder={placeholder}
          onFocus={handleFocus}
          selectionColor={colors.green}
        />
        {isPassword && (
          <Ionicons
            name={!isShowPass ? 'eye' : 'eye-off'}
            onPress={() => setIsShowPass(!isShowPass)}
            size={20}
          />
        )}
        {iconRight}
      </View>
      {error ? <CustomText mt={4} text={error} color={'red'} /> : null}
    </>
  );
};
