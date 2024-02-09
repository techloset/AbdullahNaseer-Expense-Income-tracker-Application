// import React from 'react';
// import { View, StyleSheet, Image, Text } from 'react-native';

// function MenuBar() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//         //   resizeMode="auto"
//           source={{
//             uri:
//               'https://cdn.builder.io/api/v1/image/assets/TEMP/0de263273e3952ccba3d194f5375682a9afa398f6d303055022b130c348830f2?apiKey=3eba75c323de4fd4a999bed99bd49af6&',
//           }}
//           style={styles.logo}
//         />
//         <View style={styles.link}>
//           <Text>Home</Text>
//         </View>
//       </View>
//       <View style={styles.button}>
//         <Image
//         //   resizeMode="auto"
//           source={{
//             uri:
//               'https://cdn.builder.io/api/v1/image/assets/TEMP/64c66897944befcb556572d12dda7c7cfd47465954c5628204c9538123a9b7fa?apiKey=3eba75c323de4fd4a999bed99bd49af6&',
//           }}
//           style={styles.icon}
//         />
//         <View style={styles.link}>
//           <Text>Transaction</Text>
//         </View>
//       </View>
//       <Image
//         // resizeMode="auto"
//         source={{
//           uri:
//             'https://cdn.builder.io/api/v1/image/assets/TEMP/898edd6be5c9e32748c7983abbe2b2554e8fb7225a4044e0d9690b10d5264d89?apiKey=3eba75c323de4fd4a999bed99bd49af6&',
//         }}
//         style={styles.image}
//       />
//       <View style={styles.container2}>
//         <View style={styles.subContainer}>
//           <Image
//             // resizeMode="auto"
//             source={{
//               uri:
//                 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8d91fbf5d736e2cd8b32c3a51e1fc37e2f495dcdec354a602a96e60783677a8?apiKey=3eba75c323de4fd4a999bed99bd49af6&',
//             }}
//             style={styles.icon}
//           />
//           <Image
//             // resizeMode="auto"
//             source={{
//               uri:
//                 'https://cdn.builder.io/api/v1/image/assets/TEMP/a0381a1e299ff4d01c5eb5fac082b928016c2d1afd403c2bb26818ae23a9fd95?apiKey=3eba75c323de4fd4a999bed99bd49af6&',
//             }}
//             style={styles.icon}
//           />
//         </View>
//         <View style={styles.container3}>
//           <Text style={styles.label}>Budget</Text>
//           <Text style={styles.label}>Profile</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     alignItems: 'center',
//     padding: 10,
//   },
//   header: {
//     marginTop: 20,
//     flexDirection: 'column',
//     alignItems: 'center',
//     fontSize: 10,
//     color: '#C6C6C6',
//     fontWeight: '500',
//   },
//   logo: {
//     width: 32,
//     height: 32,
//   },
//   link: {
//     marginTop: 7,
//     fontFamily: 'Inter, sans-serif',
//   },
//   button: {
//     marginTop: 20,
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//     fontSize: 10,
//     color: '#C6C6C6',
//     fontWeight: '500',
//   },
//   icon: {
//     width: 32,
//     height: 32,
//   },
//   image: {
//     width: 57,
//     height: 57,
//   },
//   container2: {
//     marginTop: 18,
//     flex: 1,
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   subContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 2,
//   },
//   container3: {
//     marginTop: 4,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//     fontSize: 10,
//     fontWeight: '500',
//   },
//   label: {
//     color: '#C6C6C6',
//     fontFamily: 'Inter, sans-serif',
//   },
// });

// export default MenuBar;



import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

function MenuBar() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/edit.png')}
          style={styles.logo}
        />
        <View style={styles.link}>
          <Text>Home</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Image
          source={require('../assets/edit.png')}
          style={styles.icon}
        />
        <View style={styles.link}>
          <Text>Transaction</Text>
        </View>
      </View>
      <Image
        source={require('../assets/edit.png')}
        style={styles.image}
      />
      <View style={styles.container2}>
        <View style={styles.subContainer}>
          <Image
            source={require('../assets/edit.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/edit.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.label}>Budget</Text>
          <Text style={styles.label}>Profile</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  header: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 10,
    color: '#C6C6C6',
    fontWeight: '500',
  },
  logo: {
    width: 32,
    height: 32,
  },
  link: {
    marginTop: 7,
    fontFamily: 'System',
  },
  button: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 10,
    color: '#C6C6C6',
    fontWeight: '500',
  },
  icon: {
    width: 32,
    height: 32,
  },
  image: {
    width: 57,
    height: 57,
  },
  container2: {
    marginTop: 18,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  container3: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 10,
    fontWeight: '500',
  },
  label: {
    color: '#C6C6C6',
    fontFamily: 'System',
  },
});

export default MenuBar;