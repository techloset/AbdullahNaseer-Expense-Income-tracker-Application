// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import HomeHeader from '../../components/HomeHeader';
// import HeroSection from '../../components/HeroSection';
// import Graph from '../../components/Graph';
// import Filter from '../../components/Filter';
// import HeaderMenu from '../../components/HeaderMenu';
// import HomeList from '../../components/HomeList';
// import MenuBar from '../../components/MenuBar';

// const Home = () => {
//   return (
//  <View style={styles.container}>
//     <HeaderMenu />
//     <HeroSection />
//     <Graph />
//     <Filter />
//     <HomeHeader />
//     <HomeList />
//     <MenuBar/>
//  </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import HeroSection from '../../components/HeroSection';
import Graph from '../../components/Graph';
import Filter from '../../components/Filter';
import HeaderMenu from '../../components/HeaderMenu';
import HomeList from '../../components/HomeList';
import MenuBar from '../../components/MenuBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HeaderMenu />
        <HeroSection />
        <Graph />
        <Filter />
        <HomeHeader />
        <HomeList />
      </View>
      <MenuBar />
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});
