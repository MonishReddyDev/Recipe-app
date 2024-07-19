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
import {useNavigation} from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';

const CategoriesList = () => {
  const {data, isSuccess, isError, isLoading} = useGetCategoriesQuery();
  const recipeCategories = data?.categories;
  const navigation = useNavigation<any>();

  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const handleNavigation = (item: any) => {
    navigation.navigate(NavigationStrings.RECIPECAYEGORY, {item: item});
  };

  return (
    <View style={styles.container}>
      <View style={{flexGrow: 1}}>
        <FlashList
          data={recipeCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <CategoryListItem onpress={handleNavigation} item={item} />
          )}
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
