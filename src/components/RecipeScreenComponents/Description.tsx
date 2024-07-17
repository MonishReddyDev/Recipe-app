import {View, Text, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import theme from '../../theme';

const Description = () => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.text}>
        This tortilla pizza is extremely easy to make. It is light enough to be
        a snack, serves well as an appetizer, or is so good that it can be
        devoured alone! You can use any sort of topping variation.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.black,
  },
});

export default memo(Description);
