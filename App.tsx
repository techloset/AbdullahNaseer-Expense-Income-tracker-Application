import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SignUp from './screens/authScreens/SignUp';
import LoginScreen from './screens/authScreens/LoginScreen';
import ForgetPassScreen from './screens/ForgetPassScreen';
import ProfileHome from './screens/ProfileScreens/ProfileHome';
import UpdateProfileScreen from './screens/ProfileScreens/UpdateProfileScreen';
import ResetPassword from './screens/ProfileScreens/ResetPassword';
import ConfirmAlert from './components/ConfirmAlert';
import MenuBar from './components/MenuBar';
import HeaderMenu from './components/HeaderMenu';
import HeroSection from './components/HeroSection';
import Graph from './components/Graph';
import Filter from './components/Filter';
import HomeHeader from './components/HomeHeader';
import HomeList from './components/HomeList';

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <SignUp/> */}
      {/* <LoginScreen/> */}
      {/* <ForgetPassScreen/> */}
      {/* <ProfileHome/> */}
      {/* <UpdateProfileScreen/> */}
      {/* <ResetPassword/> */}
      {/* <ConfirmAlert/> */}
      {/* <MenuBar/> */}
      <HeaderMenu />
      <HeroSection />
      <Graph />
      <Filter />
      <HomeHeader />
      <HomeList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
