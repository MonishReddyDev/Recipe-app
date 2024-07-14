import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown} from 'react-native-reanimated';
import theme from '../theme';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NavigationStrings from '../constants/NavigationStrings';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const IMAGE_URL =
  'https://images.pexels.com/photos/6092879/pexels-photo-6092879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const TAGLINE = 'Cook Like a Chef';
const CAPTION =
  'De Chef is a user-friendly recipe app designed for those who are new to cooking and want to try new recipes at home';
const GETSTARTED = 'Get Started';

interface SplashScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const handleNavigation = useCallback(() => {
    navigation.navigate(NavigationStrings.HOME);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Image
        style={styles.Image}
        source={{
          uri: IMAGE_URL,
        }}
      />
      {/**Animation View */}
      <Animated.View
        entering={FadeInDown.duration(300).springify().damping(5).mass(10)}
        style={[{...StyleSheet.absoluteFillObject}, styles.AnimationView]}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={styles.gradient}
        />
        <View style={styles.allContentView}>
          <Text style={styles.puchLine}>{TAGLINE}</Text>
          <Text style={styles.caption} numberOfLines={3}>
            {CAPTION}
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleNavigation}
          activeOpacity={0.5}
          accessibilityLabel="Get Started"
          accessibilityHint="Navigates to home screen"
          style={styles.startButton}>
          <Text style={styles.startBtnText}>{GETSTARTED}</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    gap: verticalScale(10),
    alignItems: 'center',
    borderColor: '#fff',
  },
  Image: {
    height: '100%',
    width: '100%',
  },
  AnimationView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(300),
  },
  puchLine: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: moderateScale(35),
    fontFamily: theme.fontStyles.bold,
  },
  caption: {
    fontSize: moderateScale(12),
    color: theme.colors.white,
    width: Platform.OS == 'android' ? wp(75) : wp(80),
    textAlign: 'center',
    fontFamily: theme.fontStyles.light,
    marginVertical: hp(2),
  },
  startButton: {
    borderWidth: 1,
    position: 'absolute',
    bottom: moderateScale(30),
    backgroundColor: theme.colors.primary,
    width: scale(300),
    alignItems: 'center',
    padding: scale(20),
    borderRadius: scale(20),
  },
  startBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
});

export default memo(SplashScreen);
