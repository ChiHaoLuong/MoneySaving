/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigators from './src/Navigations';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDark = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        translucent
        animated={true}
        backgroundColor="rgba(0, 0, 0, 0)"
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
