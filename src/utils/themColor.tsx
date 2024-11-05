// useThemeColors.ts
import { useTheme } from 'react-native-paper';
import type { Theme } from '../theme/them.types';

const useThemeColors = () => {
  const { colors } = useTheme<Theme>();
  return colors;
};

export default useThemeColors;
