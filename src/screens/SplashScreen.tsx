import React, {memo, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, StatusBar, Image, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import NavigationStrings from '../constants/NavigationStrings';
import {
  CommonActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import GetStartedButton from '../components/Buttons/GetStartedButton';
import SplashScreenTexts from '../components/Texts/SplashScreenTexts';
import SplashScreenImage from '../components/Images/SplashScreenImage';

interface SplashScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const handleNavigation = useCallback(() => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: NavigationStrings.HOME}],
      }),
    );
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SplashScreenImage />
      {/**Animation View */}
      <Animated.View
        entering={FadeInUp.duration(400).springify()}
        style={[{...StyleSheet.absoluteFillObject}, styles.AnimationView]}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}
        />
        <SplashScreenTexts />
        <GetStartedButton navigation={handleNavigation} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    height: scale(700),
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  allContentView: {
    marginTop: verticalScale(50),
    justifyContent: 'center',
    gap: verticalScale(10),
    alignItems: 'center',
  },

  AnimationView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(300),
  },
});

export default memo(SplashScreen);
