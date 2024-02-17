import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUp from '../screens/authScreens/SignUp';
import LoginScreen from '../screens/authScreens/LoginScreen';
import ForgetPassScreen from '../screens/authScreens/ForgetPassScreen';
import Home from '../screens/HomeScreens/Home';
import Transaction from '../screens/HomeScreens/Transaction';
import ProfileHome from '../screens/ProfileScreens/ProfileHome';
import UpdateProfileScreen from '../screens/ProfileScreens/UpdateProfileScreen';
import ResetPassword from '../screens/ProfileScreens/ResetPassword';
import IncomeInputScreen from '../screens/InputScreens/IncomeInput';
import Budget from '../screens/HomeScreens/Budget';
import ExpenseInputScreen from '../screens/InputScreens/ExpenseInputScreen';
import {Image} from 'react-native';

// Import your custom icons
import homeIcon from '../assets/home.png';
import transactionIcon from '../assets/transaction.png';
import profileIcon from '../assets/user.png';
import budgetIcon from '../assets/piechart.png';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconSource;

        if (route.name === 'HomeScreen') {
          iconSource = focused ? homeIcon : homeIcon;
        } else if (route.name === 'Transaction') {
          iconSource = focused ? transactionIcon : transactionIcon;
        } else if (route.name === 'ProfileHome') {
          iconSource = focused ? profileIcon : profileIcon;
        } else if (route.name === 'Budget') {
          iconSource = focused ? budgetIcon : budgetIcon;
        }

        return (
          <Image
            source={iconSource}
            style={{width: size, height: size, tintColor: color}}
          />
        );
      },
      tabBarActiveTintColor: '#7F3DFF',
      tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen
      name="HomeScreen"
      component={Home}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{headerShown: false}}
    />
    {/* <Tab.Screen
      name="Transaction"
      component={Transaction}
      options={{headerShown: false}}
    /> */}
    <Tab.Screen
      name="Budget"
      component={Budget}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="ProfileHome"
      component={ProfileHome}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

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
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpdateProfileScreen"
          component={UpdateProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IncomeInputScreen"
          component={IncomeInputScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExpenseInputScreen"
          component={ExpenseInputScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
