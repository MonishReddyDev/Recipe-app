import React, {memo} from 'react';
import {Image, useWindowDimensions} from 'react-native';

const ImagesComponent = ({recipeImage}: any) => {
  const {width, height} = useWindowDimensions();
  return (
    <Image
      source={{uri: recipeImage}}
      style={{height: width + 10, width: width}}
    />
  );
};

export default memo(ImagesComponent);
