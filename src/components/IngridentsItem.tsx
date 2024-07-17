import {View, Text, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import theme from '../theme';
import images from '../theme/images';

const IngridentsItem = ({ingredient, measurement}: any) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.start_Icon} />

      <Text style={[styles.text]}>{ingredient}</Text>

      <Text style={styles.measureText}>{measurement}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 30,
    paddingHorizontal: 20,
  },
  image: {
    height: 20,
    width: 20,
    marginRight: 3,
  },
  text: {
    fontFamily: theme.fontStyles.Inter_Medium,
    flex: 1,
    fontSize: 16,
    color: theme.colors.black,
  },
  measureText: {
    fontSize: 16,
    color: theme.colors.black,
  },
});

export default memo(IngridentsItem);
