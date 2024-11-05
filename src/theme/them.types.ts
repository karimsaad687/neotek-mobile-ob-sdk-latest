// src/theme/theme.types.ts

export interface ThemeFonts {
  regular: string;
  medium?: string;
  bold?: string;
  italic?: string;
}

export interface ThemeColors {
  overlay?: string;
  primary?: string;
  secondary?: string;
  positive?: string;
  negative?: string;
  rejected?: string;
  expired?: string;
  pending?: string;
  text?: string;
  heading?: string;
  subheading?: string;
  Background?: string;
  backgroundAlt?: string;
  card?: string;
  border?: string;
  highlight?: string;
  button?: string;
  buttonText?: string;
  shadow?: string;
  inputBackground?: string;
  placeholder?: string;
  lightpink?: string;
  white: string;
  background: string;
}

export interface Theme {
  colors?: Partial<ThemeColors>;
  fonts?: Partial<ThemeFonts>;
  scale?: number;
  animation?: {
    scale?: number;
  };
}
