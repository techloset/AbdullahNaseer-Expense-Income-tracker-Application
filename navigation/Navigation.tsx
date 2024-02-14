import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/authScreens/SignUp';
import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgetPassScreen from '../screens/authScreens/ForgetPassScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreens/Home';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TabNavigation = () => {
  <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Settings" component={} /> */}

    </Tab.Navigator>
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signup"
          options={{headerShown: false}}
          component={SignUp}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassScreen"
          component={ForgetPassScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
