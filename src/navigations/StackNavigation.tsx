import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/SplashScreen';
import NavigationStrings from '../constants/NavigationStrings';
import RecipeScreen from '../screens/RecipeScreen';
import {Easing} from 'react-native-reanimated';

const Stack = createStackNavigator();
const config: any = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig: any = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.SPLASHSCREEN}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
      }}>
      <Stack.Screen
        name={NavigationStrings.SPLASHSCREEN}
        component={SplashScreen}
        options={{gestureEnabled: false}}
      />
      <Stack.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={NavigationStrings.RECIPESCREEN}
        component={RecipeScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
