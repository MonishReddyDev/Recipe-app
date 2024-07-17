import {View, Text, Animated, Pressable, StyleSheet} from 'react-native';
import React, {memo, useCallback, useRef} from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import theme from '../../theme';

const GETSTARTED = 'Get Started';

const GetStartedButton = ({navigation}: any) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  }, [navigation]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [navigation]);

  return (
    <Animated.View style={[styles.container, {transform: [{scale}]}]}>
      <Pressable
        style={styles.startButton}
        onPress={navigation}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel="Get Started"
        accessibilityHint="Navigates to home screen">
        <Text style={styles.startBtnText}>{GETSTARTED}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  startButton: {
    borderWidth: 1,
    position: 'absolute',
    bottom: moderateScale(30),
    backgroundColor: theme.colors.primary,
    width: scale(300),
    alignItems: 'center',
    padding: scale(20),
    borderRadius: scale(20),
  },
  startBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
});

export default memo(GetStartedButton);
