import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {UnAuthParamList} from './screenType';
import {AuthScreen, MainScreen} from '@screens';

const UnAuthStack = createNativeStackNavigator<UnAuthParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigators = () => {
  return (
    <UnAuthStack.Navigator screenOptions={navigatorOptions}>
      <UnAuthStack.Screen name="Main" component={MainScreen} />
      <UnAuthStack.Screen name="Auth" component={AuthScreen} />
    </UnAuthStack.Navigator>
  );
};

export default Navigators;
