import {
  View,
  Text,
  BackHandler,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import theme from '../theme';
import {moderateScale, scale} from 'react-native-size-matters';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const Home = () => {
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     () => {
  //       // Prevent navigating back to SplashScreen
  //       return true; // Returning true prevents default behavior (going back)
  //     },
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20, borderWidth: 0}}>
      <StatusBar barStyle={'dark-content'} />
      {/**Header section */}
      <Header />
      {/**Search Section */}
      <SearchBar />
      {/** Just for you List */}
      <View>
        <Text
          style={{
            color: theme.colors.black,
            fontWeight: '800',
            fontSize: 22,
            fontFamily: theme.fontStyles.semi_bold,
          }}>
          Just For You
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
