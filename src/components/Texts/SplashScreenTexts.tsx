import {View, Text, StyleSheet, Platform} from 'react-native';
import React, {memo} from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import theme from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TAGLINE = 'Cook Like a Chef';
const CAPTION =
  'De Chef is a user-friendly recipe app designed for those who are new to cooking and want to try new recipes at home';

const SplashScreenTexts = () => {
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify()}
      style={styles.allContentView}>
      <Text style={styles.puchLine}>{TAGLINE}</Text>
      <Text style={styles.caption} numberOfLines={3}>
        {CAPTION}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  allContentView: {
    marginTop: verticalScale(50),
    justifyContent: 'center',
    gap: verticalScale(10),
    alignItems: 'center',
    borderColor: '#fff',
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
});
export default memo(SplashScreenTexts);
