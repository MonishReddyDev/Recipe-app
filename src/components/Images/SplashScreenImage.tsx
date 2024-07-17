import {View, Text, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';

const IMAGE_URL =
  'https://images.pexels.com/photos/6092879/pexels-photo-6092879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
const SplashScreenImage = () => {
  return (
    <>
      <Image
        style={styles.Image}
        source={{
          uri: IMAGE_URL,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Image: {
    height: '100%',
    width: '100%',
  },
});

export default memo(SplashScreenImage);
