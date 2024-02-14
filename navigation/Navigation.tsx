import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/authScreens/SignUp';
import LoginScreen from '../screens/authScreens/LoginScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="signup" options={{ headerShown: false }} component={SignUp} />
            <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


