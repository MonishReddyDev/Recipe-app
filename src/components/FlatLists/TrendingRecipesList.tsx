import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import React, {Suspense, lazy, memo, useCallback} from 'react';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {useGetRecipesByAreaQuery} from '../../services/recipeApi';
import {RecipeWithArea} from '../../types';
import theme from '../../theme';
import {getRandomAreatoday} from '../../common/methods';

const {width} = Dimensions.get('screen');

const TrendingRecipesListItem = lazy(
  () => import('../RenderItems/TrendingRecipesListItem'),
);

const query = getRandomAreatoday;

const TrendingRecipesList = () => {
  const {data, isLoading, isFetching, isError} =
    useGetRecipesByAreaQuery(query);
  const recipesData: RecipeWithArea[] = data?.meals ?? [];

  const renderItem: ListRenderItem<RecipeWithArea> = useCallback(
    ({item}) => <TrendingRecipesListItem item={item} />,
    [],
  );

  const LoadinData = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={theme.colors.primary} />
      </View>
    );
  };

  if (isLoading || isFetching) {
    LoadinData();
  }

  if (isError) {
    <View style={styles.loading}>
      <Text
        style={{color: theme.colors.primary, fontWeight: '700', fontSize: 13}}>
        Something went worng.Please try again later
      </Text>
    </View>;
  }

  return (
    <>
      <Text style={styles.headingHext}>Trending Recipes</Text>
      <Suspense fallback={LoadinData()}>
        <View style={{borderWidth: 0, flex: 1, minHeight: 100}}>
          <FlashList
            data={recipesData}
            keyExtractor={item => item.idMeal}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            estimatedItemSize={200}
            ListFooterComponent={<View style={{height: 20}}></View>}
          />
        </View>
      </Suspense>
    </>
  );
};

const styles = StyleSheet.create({
  headingHext: {
    fontWeight: 'bold',
    fontFamily: theme.fontStyles.bold,
    fontSize: 22,
    color: theme.colors.black,
    marginBottom: 10,
  },
  loading: {
    height: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(TrendingRecipesList);
