import React, {lazy} from 'react';
import SplashScreen from '../screens/SplashScreen';
import NavigationStrings from '../constants/NavigationStrings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Home = lazy(() => import('../screens/Home'));
const RecipeScreen = lazy(() => import('../screens/RecipeScreen'));
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NavigationStrings.SPLASHSCREEN}
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}>
      <Stack.Screen
        name={NavigationStrings.SPLASHSCREEN}
        component={SplashScreen}
      />
      <Stack.Screen
        name={NavigationStrings.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={NavigationStrings.RECIPESCREEN}
        component={RecipeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
