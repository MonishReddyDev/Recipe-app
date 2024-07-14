import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import theme from '../theme';
import images from '../theme/images';

const RECIPE = 'Recipe';
const DISCOVERBEST = 'Discover Best';
const R = 'R';
const Header = () => {
  return (
    <View style={styles.Headercontainer}>
      <View>
        <Text style={styles.HeaderText}>{DISCOVERBEST}</Text>
        <Text style={styles.HeaderText}>{RECIPE}</Text>
      </View>
      <View style={styles.ImageView}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={images.splash_logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Headercontainer: {
    marginTop: moderateScale(10),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  HeaderText: {
    color: theme.colors.primary,
    fontWeight: '800',
    fontSize: moderateScale(28),
    fontFamily: theme.fontStyles.bold,
  },
  ImageView: {
    height: scale(50),
    width: scale(65),
    borderRadius: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Header;
