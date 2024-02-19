// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SignUp from '../screens/auth/signup/SignUp';
// import LoginScreen from '../screens/auth/login/Login';
// import ForgetPassScreen from '../screens/auth/forgetPassword/ForgetPassword';
// import Home from '../screens/Home/Home';
// import Transaction from '../screens/Home/Transactions';
// import ProfileHome from '../screens/Profile/ProfileHome';
// import UpdateProfileScreen from '../screens/Profile/UpdateProfile';
// import ResetPassword from '../screens/Profile/ResetPassword';
// import IncomeInputScreen from '../screens/createTransaction/IncomeInput';
// import Budget from '../screens/Home/Budget';
// import ExpenseInputScreen from '../screens/createTransaction/expenseInput/ExpenseInput';
// import {Image} from 'react-native';
// import {useState} from 'react';

// // Import your custom icons
// import homeIcon from '../assets/home.png';
// import transactionIcon from '../assets/transaction.png';
// import profileIcon from '../assets/user.png';
// import budgetIcon from '../assets/piechart.png';

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// const TabNavigation = () => (
//   <Tab.Navigator
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         let iconSource;

//         if (route.name === 'HomeScreen') {
//           iconSource = focused ? homeIcon : homeIcon;
//         } else if (route.name === 'Transaction') {
//           iconSource = focused ? transactionIcon : transactionIcon;
//         } else if (route.name === 'ProfileHome') {
//           iconSource = focused ? profileIcon : profileIcon;
//         } else if (route.name === 'Budget') {
//           iconSource = focused ? budgetIcon : budgetIcon;
//         }

//         return (
//           <Image
//             source={iconSource}
//             style={{width: size, height: size, tintColor: color}}
//           />
//         );
//       },
//       tabBarActiveTintColor: '#7F3DFF',
//       tabBarInactiveTintColor: 'gray',
//     })}>
//     <Tab.Screen
//       name="HomeScreen"
//       component={Home}
//       options={{headerShown: false}}
//     />
//     <Tab.Screen
//       name="Transaction"
//       component={Transaction}
//       options={{headerShown: false}}
//     />
//     {/* <Tab.Screen
//       name="Transaction"
//       component={Transaction}
//       options={{headerShown: false}}
//     /> */}
//     <Tab.Screen
//       name="Budget"
//       component={Budget}
//       options={{headerShown: false}}
//     />
//     <Tab.Screen
//       name="ProfileHome"
//       component={ProfileHome}
//       options={{headerShown: false}}
//     />
//   </Tab.Navigator>
// );

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="signup"
//           options={{headerShown: false}}
//           component={SignUp}
//         />
//         <Stack.Screen
//           name="login"
//           component={LoginScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ForgetPassScreen"
//           component={ForgetPassScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Home"
//           component={TabNavigation}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="UpdateProfileScreen"
//           component={UpdateProfileScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ResetPassword"
//           component={ResetPassword}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="IncomeInputScreen"
//           component={IncomeInputScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="ExpenseInputScreen"
//           component={ExpenseInputScreen}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;

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
import ProfileHome from '../screens/profile/Profile';
import ResetPassword from '../screens/profile/ResetPassword';
import Budget from '../screens/Budget/Budget';
import {Image} from 'react-native';
import homeIcon from '../assets/home.png';
import transactionIcon from '../assets/transaction.png';
import profileIcon from '../assets/user.png';
import budgetIcon from '../assets/piechart.png';
import UpdateProfile from '../screens/profile/UpdateProfile';

import CreateTransaction from '../screens/createTransaction/CreateTransaction';

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
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
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
              options={{headerShown: false,}}           
            />
            {/* <Stack.Screen
              name="CreateTransaction"
              component={CreateTransaction}
              options={({route}) => ({
                headerShown: false,
                backgroundColor: route.params
                  ? route.params.backgroundColor
                  : 'red', // Use the backgroundColor prop value provided via navigation, or default to red
              })}
            /> */}
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
