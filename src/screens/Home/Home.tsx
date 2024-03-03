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

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import HeroSection from '../../components/HeroSection';
import Graph from '../../components/Graph';
import Filter from '../../components/Filter';
import HeaderMenu from '../../components/HeaderMenu';
import HomeList from '../../components/HomeList';
import MenuBar from '../../components/MenuBar';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../../navigation/Navigation';
import useHome from './useHome';

const Home = () => {
  const navigation = useNavigation();
  const {
    financeSummary,
    selectedFilter,
    handleFilterSelect,
    setSelectedFilter,
    isLoading,
    isError,
    transactions,
  } = useHome();
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <HeaderMenu />
        <HeroSection financeSummary={financeSummary} />
        <Graph />
        <Filter
          selectedFilter={selectedFilter}
          handleFilterSelect={handleFilterSelect}
          setSelectedFilter={setSelectedFilter}
        />
        <HomeHeader />
        <HomeList  isLoading={isLoading} isError={isError} transactions={transactions} />
      </ScrollView>
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
