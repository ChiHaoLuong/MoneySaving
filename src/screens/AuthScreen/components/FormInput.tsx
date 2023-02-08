import {CustomButton, CustomText, CustomTextInput, View} from 'Components';
import {Formik} from 'formik';
import {EnumScreenType} from 'Navigations/screenType';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from 'Theme';
import * as Yub from 'yup';

interface FormInputValue {
  email: string;
  password: string;
}

interface FormInputProps {
  screenTypeState: EnumScreenType;
  setScreenTypeState: (val: EnumScreenType) => void;
}

const initialValues: FormInputValue = {
  email: '',
  password: '',
};

const authSchema = Yub.object().shape({
  email: Yub.string()
    .email('Vui lòng nhập đúng định dạng Email')
    .required('Vui lòng điền đủ thông tin'),
  password: Yub.string()
    .required('Vui lòng điền đầy đủ thông tin')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự'),
});

export const FormInput = (props: FormInputProps) => {
  const {screenTypeState, setScreenTypeState} = props;

  const onPressChangeScreenType = () => {
    if (screenTypeState === EnumScreenType.LOGIN) {
      setScreenTypeState(EnumScreenType.REGISTER);
    } else {
      setScreenTypeState(EnumScreenType.LOGIN);
    }
  };

  const submittingHandle = (values: FormInputValue) => {
    if (screenTypeState === EnumScreenType.LOGIN) {
      console.log('login: ', values);
    } else {
      console.log('register: ', values);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submittingHandle}
      validationSchema={authSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors}) => (
        <View mh={36}>
          <CustomTextInput
            setValue={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            error={errors?.email}
            fontSize={18}
            placeholder={'Email'}
          />
          <CustomTextInput
            setValue={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            error={errors?.password}
            mt={24}
            isPassword
            fontSize={18}
            placeholder={'Password'}
          />
          <CustomButton
            pv={12}
            mt={24}
            btnColor={colors.green}
            onPress={handleSubmit}
            title={
              screenTypeState === EnumScreenType.LOGIN ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'
            }
            titleColor={colors.white[500]}
          />
          {screenTypeState === EnumScreenType.REGISTER && (
            <CustomButton
              pv={12}
              mt={24}
              onPress={onPressChangeScreenType}
              title="Đăng nhập"
              titleColor={colors.green}
            />
          )}
          {screenTypeState === EnumScreenType.LOGIN && (
            <View
              mt={24}
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row">
              <TouchableOpacity
                style={styles.subBtn}
                onPress={onPressChangeScreenType}>
                <CustomText
                  text="Đăng ký"
                  color={colors.green}
                  fontWeight="700"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.subBtn}
                onPress={onPressChangeScreenType}>
                <CustomText
                  text="Quên mật khẩu"
                  color={colors.green}
                  fontWeight="700"
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  subBtn: {
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
});
