import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Animated as animated,
} from 'react-native';
import React, {memo, useRef} from 'react';
import theme from '../../theme';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {moderateScale, scale} from 'react-native-size-matters';

const CategoryListItem = ({item, onpress}: any) => {
  const scaleValue = useRef(new animated.Value(1)).current;
  const handlePressIn = () => {
    animated
      .spring(scaleValue, {
        toValue: 0.9,
        useNativeDriver: true, // Add useNativeDriver for better performance
      })
      .start();
  };
  const handlePressOut = () => {
    animated
      .spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      })
      .start();
  };
  const animatedStyle = {
    transform: [{scale: scaleValue}],
  };
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify().delay(100)}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => onpress(item)}
        activeOpacity={0.9}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[styles.container, animatedStyle]}>
        <Image
          style={styles.image}
          source={{uri: item.strCategoryThumb}}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.strCategory}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(50),
    width: moderateScale(95),
  },
  image: {
    height: '100%',
    width: '100%',
    borderWidth: 0,
  },
  title: {
    marginTop: 2,
    fontSize: scale(10),
    fontFamily: theme.fontStyles.semi_bold,
    color: theme.colors.black,
  },
});

export default memo(CategoryListItem);
