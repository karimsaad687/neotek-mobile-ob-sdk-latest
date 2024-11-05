/* eslint-disable prettier/prettier */
import type { StyleProp, ViewStyle } from 'react-native';

export type ButtonVariant =
  | 'primary'
  | 'danger'
  | 'active'
  | 'expierd'
  | 'secondary';

interface NeotekButtonProps {
  text: string;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: any) => void;
}
export type { NeotekButtonProps };
