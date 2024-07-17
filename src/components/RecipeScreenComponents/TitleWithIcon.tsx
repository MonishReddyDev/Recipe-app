import {View, Text, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import theme from '../../theme';
import images from '../../theme/images';

const TitleWithIcon = ({item}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item[0].strMeal}</Text>
      <Image style={styles.checkIcon} source={images.recipeCheck_Icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fontStyles.semi_bold,
    color: theme.colors.black,
  },
  checkIcon: {
    height: 25,
    width: 25,
  },
});
export default memo(TitleWithIcon);
