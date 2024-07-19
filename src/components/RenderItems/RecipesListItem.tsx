import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale} from 'react-native-size-matters';
import theme from '../../theme';
import {useGetRecipeDetailsWithIdQuery} from '../../services/recipeApi';
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const RecipesListItem = ({item}: any) => {
  const {data} = useGetRecipeDetailsWithIdQuery(item.idMeal);
  const navigation = useNavigation<any>();

  const handleNavigation = () => {
    navigation.navigate(NavigationStrings.RECIPESCREEN, {
      item: data?.meals,
      image: data?.meals[0].strMealThumb,
    });
  };

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      activeOpacity={0.6}
      style={{
        height: 150,
        marginVertical: 10,
        borderRadius: 20,
      }}>
      <Image style={styles.image} source={{uri: item.strMealThumb}} />
      <LinearGradient
        colors={['transparent', theme.colors.linearGradientBlack]}
        style={styles.gradient}
      />
      <View style={styles.titleContainer}>
        <Text numberOfLines={2} style={styles.recipeTitle}>
          {item.strMeal}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
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

export default memo(RecipesListItem);
