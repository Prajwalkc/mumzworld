import {ViewStyle} from 'react-native';
import {opacity} from './colors';

export const shadow: ViewStyle = {
  shadowColor: opacity.shadowCardOpacity,
  shadowOffset: {
    height: 2,
    width: 2,
  },
  shadowOpacity: 1.0,
  shadowRadius: 12,
  elevation: 10,
};
