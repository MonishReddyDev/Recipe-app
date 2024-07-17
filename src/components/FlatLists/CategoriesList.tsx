import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useGetCategoriesQuery} from '../../services/recipeApi';
import CategoryListItem from '../RenderItems/CategoryListItem';
import {moderateScale} from 'react-native-size-matters';

const CategoriesList = () => {
  const {data, isSuccess, isError, isLoading} = useGetCategoriesQuery();
  const recipeCategories = data?.categories;

  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{flexGrow: 1}}>
        <FlashList
          data={recipeCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <CategoryListItem item={item} />}
          estimatedItemSize={200}
          horizontal
          contentContainerStyle={{paddingRight: 16}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateScale(70),
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: moderateScale(20),
    marginVertical: moderateScale(10),
  },
});

export default memo(CategoriesList);
