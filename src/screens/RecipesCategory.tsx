import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useCallback, useState} from 'react';
import {
  useGetFilterRecipesQuery,
  useGetRecipeDetailsWithIdQuery,
} from '../services/recipeApi';
import {FlashList, ListRenderItem} from '@shopify/flash-list';
import {FilteredMealRecipe} from '../types';
import theme from '../theme';
import RecipesListItem from '../components/RenderItems/RecipesListItem';
import {moderateScale} from 'react-native-size-matters';

const RecipesCategory = ({route, navigation}: any) => {
  const {item} = route.params;

  const [categoryName, setcategoryName] = useState(item.strCategory);
  const {data: CategoryData, isLoading} =
    useGetFilterRecipesQuery(categoryName);
  const CategoryDataList: FilteredMealRecipe[] = CategoryData?.meals ?? [];

  const renderItem: ListRenderItem<FilteredMealRecipe> = useCallback(
    ({item}) => <RecipesListItem item={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.heading}>Delicious {categoryName} Recipes</Text>
      <FlashList
        data={CategoryDataList}
        keyExtractor={item => item.idMeal}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={200}
        ListFooterComponent={<View style={styles.footer}></View>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginHorizontal: moderateScale(20),
  },
  container: {
    borderColor: 'red',
    flex: 1,
    marginVertical: moderateScale(10),
  },
  heading: {
    fontWeight: 'bold',
    fontFamily: theme.fontStyles.semi_bold,
    fontSize: moderateScale(22),
  },
  itemContainer: {},
  footer: {
    height: moderateScale(20),
  },
});

export default memo(RecipesCategory);
