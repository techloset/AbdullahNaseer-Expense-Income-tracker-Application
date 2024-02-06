// import { View, Text } from 'react-native'
// import React from 'react'
// import LounchScreen from './screens/LaunchScreen'
// import SignUp from './screens/authScreens/SignUp'

// const App = () => {
//   return (
//     <View>
//       {/* <Text>App</Text> */}
//       {/* <LounchScreen/> */}
//       <SignUp/>
//     </View>
//   )
// }

// export default App


import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import SignUp from './screens/authScreens/SignUp'

const App = () => {
  return (
    <View>
      {/* <Text>App</Text> */}
      <SignUp/>
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