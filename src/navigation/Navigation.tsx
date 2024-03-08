import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';

import SignUp from '../screens/auth/signup/SignUp';
import LoginScreen from '../screens/auth/login/Login';
import ForgetPassScreen from '../screens/auth/forgetPassword/ForgetPassword';
import Home from '../screens/home/Home';
import Transaction from '../screens/transactions/Transactions';
import ProfileHome from '../screens/profile/profile/Profile';
import ResetPassword from '../screens/profile/resetPassword/ResetPassword';
import Budget from '../screens/budget/Budget';
import CreateTransaction from '../screens/createTransaction/CreateTransaction';
import UpdateProfile from '../screens/profile/updateProfile/UpdateProfile';

import {Image} from 'react-native';
import {User} from '../types/types';

import homeIcon from '../assets/home.png';
import transactionIcon from '../assets/transaction.png';
import profileIcon from '../assets/profile.png';
import budgetIcon from '../assets/piechart.png';
import addIcon from '../assets/add.png';
import TransactionDetail from '../screens/transactionDetail/TransactionDetail';
import { NavigationRoute } from '../types/navigationType';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconSource;
        let iconStyle = {}; // Separate styling for the middle icon

        switch (route.name) {
          case 'HomeScreen':
            iconSource = focused ? homeIcon : homeIcon;
            break;
          case 'Transaction':
            iconSource = focused ? transactionIcon : transactionIcon;
            break;
          case 'CreateTransaction':
            iconSource = addIcon;
            iconStyle = {width: 50, height: 50}; // Example different size for middle icon
            break;
          case 'ProfileHome':
            iconSource = focused ? profileIcon : profileIcon;
            break;
          case 'Budget':
            iconSource = focused ? budgetIcon : budgetIcon;
            break;
          default:
            iconSource = null;
            break;
        }

        return (
          <Image
            source={iconSource}
            style={{width: size, height: size, tintColor: color, ...iconStyle}}
          />
        );
      },
      tabBarActiveTintColor: '#7F3DFF',
      tabBarInactiveTintColor: '#C6C6C6',
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 70,
        backgroundColor: '#FCFCFC',
      },
    })}>
    {/* Your Tab.Screen components */}
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
    <Tab.Screen
      name="CreateTransaction"
      component={CreateTransaction}
      options={{headerShown: false}}
    />
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
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(
      (user: FirebaseUser | null) => {
        setUser(user as User);
        if (initializing) setInitializing(false);
      },
    );
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Home"
              component={TabNavigation}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="UpdateProfile"
              component={UpdateProfile}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="CreateTransaction"
              component={CreateTransaction}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="TransactionDetail"
              component={TransactionDetail}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;



