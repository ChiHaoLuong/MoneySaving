import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CustomText, RootView, View} from '../../Components';

const LoginScreen = () => {
  return (
    <RootView p={16}>
      <View flexDirection="row">
        <AntDesign name="wallet" size={24} />
        <CustomText ml={12} text="Money Saving" />
      </View>
    </RootView>
  );
};

export default LoginScreen;
