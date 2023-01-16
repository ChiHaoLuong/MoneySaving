import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {UnAuthParamList} from './screenType';
import {LoginScreen} from '../screens';

const UnAuthStack = createNativeStackNavigator<UnAuthParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigators = () => {
  return (
    <UnAuthStack.Navigator screenOptions={navigatorOptions}>
      <UnAuthStack.Screen name="Login" component={LoginScreen} />
    </UnAuthStack.Navigator>
  );
};

export default Navigators;
