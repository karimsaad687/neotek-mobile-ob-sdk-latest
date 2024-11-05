/* eslint-disable prettier/prettier */
import type {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface NeotekCustomTabProps {
  text: string;
  icon: ImageSourcePropType;
  backgroundColor?: string;
  borderRadius?: number;
  iconColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  screenName: string;
}
