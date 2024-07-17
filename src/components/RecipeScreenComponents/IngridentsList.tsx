import {View, Text} from 'react-native';
import React, {lazy, memo} from 'react';

const IngridentsItem = lazy(() => import('../IngridentsItem'));

const IngridentsList = ({getIngredientsAndMeasures}: any) => {
  return (
    <View style={{marginVertical: 15, gap: 10}}>
      {getIngredientsAndMeasures.map(
        (i: {ingredient: any; measure: any}, index: number) => {
          return (
            <IngridentsItem
              key={i.ingredient + index}
              ingredient={i.ingredient}
              measurement={i.measure}
            />
          );
        },
      )}
    </View>
  );
};

export default memo(IngridentsList);
