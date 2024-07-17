import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import theme from '../theme';
import {moderateScale} from 'react-native-size-matters';

const SearchBar = () => {
  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputText}
        placeholder="Searg here..."
        placeholderTextColor={'gray'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: moderateScale(30),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    backgroundColor: theme.colors.SearchTabBG,
  },
  InputText: {
    padding: moderateScale(20),
    borderRadius: moderateScale(20),
  },
});

export default memo(SearchBar);
