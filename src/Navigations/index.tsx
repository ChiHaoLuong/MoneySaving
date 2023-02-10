import React, {useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {UnAuthParamList} from './screenType';
import {AuthScreen, MainScreen} from '@screens';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import BottomTabNav from './BottomNav';

const UnAuthStack = createNativeStackNavigator<UnAuthParamList>();

const navigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Navigators = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  console.log(user);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (user) {
    return <BottomTabNav />;
  }

  return (
    <UnAuthStack.Navigator screenOptions={navigatorOptions}>
      <UnAuthStack.Screen name="Main" component={MainScreen} />
      <UnAuthStack.Screen name="Auth" component={AuthScreen} />
    </UnAuthStack.Navigator>
  );
};

export default Navigators;
