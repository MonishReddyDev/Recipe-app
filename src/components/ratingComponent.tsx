import {View, Text, StyleSheet, Image} from 'react-native';
import React, {memo} from 'react';
import images from '../theme/images';
import {generateRandomRating} from '../common/methods';
import {moderateScale} from 'react-native-size-matters';
import theme from '../theme';

const randomRating = generateRandomRating();

const RatingComponent = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.strMeal}</Text>
      <View style={styles.ratingView}>
        <Image source={images.start_Icon} style={{height: 10, width: 10}} />
        <Text style={styles.text}>{randomRating.rate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    borderRadius: moderateScale(10),
    height: moderateScale(50),
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: moderateScale(10),
    gap: moderateScale(5),
    padding: moderateScale(10),
    justifyContent: 'flex-start',
  },
  ratingView: {
    gap: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: moderateScale(5),
  },
  text: {
    color: theme.colors.white,
    fontWeight: '700',
  },
});

export default memo(RatingComponent);
