import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomText, RootView, View} from '../../Components';
import {colors} from '../../Theme';

const LoginScreen = () => {
  return (
    <RootView p={16}>
      <View alignItems="center" flexDirection="row">
        <AntDesign color={colors.green} name="wallet" size={24} />
        <CustomText
          ml={12}
          color={colors.green}
          text="Money Saving"
          size={18}
          lineHeight={20}
          fontWeight="bold"
        />
      </View>
    </RootView>
  );
};

export default LoginScreen;
