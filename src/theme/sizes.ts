import {Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const Fontsizes = {
  sizes: {
    small: moderateScale(18),
    medium: moderateScale(22),
    large: moderateScale(30),
    xlarge: moderateScale(35),
  },
  ScreenWH: {
    width,
    height,
  },
};

export default Fontsizes;
