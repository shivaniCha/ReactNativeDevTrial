import {Platform, Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const isIOS = Platform.OS === 'ios';

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
module.exports = {
  color: {
    black: '#262626',
    white: '#ffffff',
    blue: '#2e61a4',
    lightGray: '#d3d3d3',
    green: '#1c8b1e',
  },
  screen: Dimensions.get('window'),
  isIOS: isIOS,
  isANDROID: Platform.OS === 'android',
  isiPAD: SCREEN_HEIGHT / SCREEN_WIDTH < 1.6,
  screenHeight: (isIOS && SCREEN_HEIGHT) || SCREEN_HEIGHT - 24,
  screenWidth: SCREEN_WIDTH,
  fullScreenHeight: SCREEN_HEIGHT,

  fontSize: {
    xmini: normalize(10),
    mini: normalize(12),
    small: normalize(15),
    medium: normalize(17),
    large: normalize(20),
    xlarge: normalize(30),
  },
};
