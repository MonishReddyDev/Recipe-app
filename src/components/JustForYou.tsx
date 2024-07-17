import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {memo, useEffect, useRef, useState} from 'react';
import {useGetRandomRecipeQuery} from '../services/recipeApi';
import theme from '../theme';
import FastImage from 'react-native-fast-image';
import {moderateScale, scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../constants/NavigationStrings';

const JustForYouText = 'Just For You';
const LoadignFailed = 'Failed to load image';

const JustForYou = () => {
  const navigation = useNavigation<any>();
  const [image, setImage] = useState<string | undefined>();
  const setRef = useRef<string | undefined>();
  const {data, isLoading, isError} = useGetRandomRecipeQuery();
  const meals = data?.meals;

  

  useEffect(() => {
    if (!isLoading && meals) {
      const imageUrl = meals[0].strMealThumb;
      const str = `Today's Special ${meals[0].strArea} ${meals[0].strCategory} ${meals[0].strMeal}`;
      setImage(imageUrl);
      setRef.current = str;
    }
  }, [isLoading, isError, data]);

  if (isError || !image || isLoading) {
    return (
      <View
        style={{alignItems: 'center', justifyContent: 'center', height: 200}}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        {/* Add retry button or error handling UI */}
      </View>
    );
  }


  const handleNavigation = () => {
    navigation.navigate(NavigationStrings.RECIPESCREEN, {
      item: meals,
      image: image,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{JustForYouText}</Text>
      <TouchableOpacity
        onPress={handleNavigation}
        style={styles.imageContainer}
        activeOpacity={0.6}>
        {isLoading && !image ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
          </View>
        ) : (
          <Animated.View entering={FadeInDown.duration(300).springify()}>
            <Animated.Image
              style={styles.Image}
              source={{uri: image}}
              resizeMode={FastImage.resizeMode.cover}></Animated.Image>
            <LinearGradient
              colors={['transparent', theme.colors.linearGradientBlack]}
              style={styles.gradient}
            />
            <Animated.View
              entering={FadeInDown.duration(200).springify()}
              style={styles.titleContainer}>
              <Text numberOfLines={2} style={styles.recipeTitle}>
                {setRef.current}
              </Text>
            </Animated.View>
          </Animated.View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: theme.colors.black,
    fontWeight: '800',
    fontSize: moderateScale(22),
    fontFamily: theme.fontStyles.semi_bold,
  },
  imageContainer: {
    marginVertical: moderateScale(10),
    height: moderateScale(130),
    width: '100%',
    borderRadius: moderateScale(20),
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: moderateScale(20),
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  gradient: {
    height: '100%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: moderateScale(20),
  },
  titleContainer: {
    position: 'absolute',
    bottom: moderateScale(10),
    left: moderateScale(10),
    right: moderateScale(10),
  },
  recipeTitle: {
    color: 'white',
    fontSize: scale(16),
    fontWeight: '600',
    padding: 5,
    fontFamily: theme.fontStyles.semi_bold,
  },
});

export default memo(JustForYou);
