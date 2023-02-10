/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {OverviewScreen} from 'screens';
import {BottomNavParamList} from './screenType';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from 'Theme';
import {ColorValue} from 'react-native';

const Tab = createBottomTabNavigator<BottomNavParamList>();

const renderIconOverview = ({
  color,
  size,
}: {
  color: ColorValue;
  size: number;
}) => {
  return <Ionicons name="home-sharp" color={color} size={size} />;
};

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.black[500],
        tabBarInactiveTintColor: colors.gray[700],
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: renderIconOverview,
          title: 'Tổng quan',
        }}
        name="overview"
        component={OverviewScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
