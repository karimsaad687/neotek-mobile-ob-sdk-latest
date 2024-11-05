/* eslint-disable prettier/prettier */
import type { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface NeoTekTextInputProps extends TextInputProps {
  error?: string;
  fontFamily?: TextStyle['fontFamily'];
  customStyle?: ViewStyle;
  placeholder: string;
  value?: string;
}
