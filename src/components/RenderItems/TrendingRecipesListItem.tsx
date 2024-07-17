import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import RatingComponent from '../ratingComponent';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme';
import {useNavigation} from '@react-navigation/native';
import {useGetRecipeDetailsWithIdQuery} from '../../services/recipeApi';
import NavigationStrings from '../../constants/NavigationStrings';

const TrendingRecipesListItem = ({item}: any) => {
  const navigation = useNavigation<any>();
  const [id, setId] = useState<any>('52807');
  const {data, isLoading, isFetching} = useGetRecipeDetailsWithIdQuery(id);

  const handleNavigation = () => {
    setId(item.idMeal);
    if (!isLoading || !isFetching) {
      navigation.navigate(NavigationStrings.RECIPESCREEN, {
        item: data?.meals,
        image: item.strMealThumb,
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      activeOpacity={0.6}
      style={styles.container}>
      <FastImage
        source={{uri: item.strMealThumb}}
        style={styles.image}
        resizeMode="cover"
      />
      <LinearGradient
        colors={['transparent', theme.colors.black01]}
        style={styles.gradient}
      />
      <RatingComponent item={item} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: moderateScale(250),
    width: '100%',
    borderRadius: 8,
  },
  gradient: {
    height: '100%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: moderateScale(20),
  },
});
export default memo(TrendingRecipesListItem);
