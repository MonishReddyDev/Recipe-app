import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {Suspense, lazy, memo, useMemo, useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import theme from '../theme';
import ImagesComponent from '../components/RecipeScreenComponents/ImagesComponent';
import TitleWithIcon from '../components/RecipeScreenComponents/TitleWithIcon';
import Description from '../components/RecipeScreenComponents/Description';
import {getIngredientsAndMeasures} from '../common/methods';

const IngridentsList = lazy(
  () => import('../components/RecipeScreenComponents/IngridentsList'),
);

const INGRIDENTS = 'Ingridents';

const RecipeScreen = ({route}: any) => {
  const {item, image} = route.params;
  const {width} = useWindowDimensions();
  const ingredientsAndMeasuresLength = getIngredientsAndMeasures(
    item[0],
  ).length;
  

  const ingredientsAndMeasures = useMemo(
    () => getIngredientsAndMeasures(item[0]),
    [item],
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <ImagesComponent recipeImage={image} width={width} />
        <View style={[styles.absoluteView, {top: width - 20}]}></View>
        <View style={styles.mainRecipeContainer}>
          <TitleWithIcon item={item} />
          <Description />
          <View style={styles.ingridentsContainer}>
            <Text style={styles.title}>{INGRIDENTS}</Text>
            <Text style={styles.IngridentsCount}>
              ({ingredientsAndMeasuresLength})
            </Text>
          </View>
          <Suspense
            fallback={
              <ActivityIndicator size="large" color={theme.colors.primary} />
            }>
            <IngridentsList
              getIngredientsAndMeasures={ingredientsAndMeasures}
            />
          </Suspense>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  absoluteView: {
    height: moderateScale(30),
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: moderateScale(30),
    position: 'absolute',
    borderTopLeftRadius: moderateScale(30),
  },
  title: {
    fontSize: 22,
    fontFamily: theme.fontStyles.semi_bold,
    color: theme.colors.black,
  },
  mainRecipeContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    borderWidth: 0,
    backgroundColor: 'white',
  },
  ingridentsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  IngridentsCount: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default memo(RecipeScreen);
