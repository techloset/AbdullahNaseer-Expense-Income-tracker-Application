import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SignUp from './screens/authScreens/SignUp'
import LoginScreen from './screens/authScreens/LoginScreen'
import ForgetPassScreen from './screens/ForgetPassScreen'
import ProfileHome from './screens/ProfileScreens/ProfileHome'
import UpdateProfileScreen from './screens/ProfileScreens/UpdateProfileScreen'

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      {/* <SignUp/> */}
      {/* <LoginScreen/> */}
      {/* <ForgetPassScreen/> */}
      {/* <ProfileHome/> */}
      <UpdateProfileScreen/>
    </View>
  )
}

export default App





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',  
    paddingHorizontal: 15,
  },
})