/* eslint-disable prettier/prettier */
import React from 'react';
import { ThemeProvider as PaperThemeProvider } from 'react-native-paper';
import type { Theme } from '../theme/them.types'; // Corrected import path
import themes from '../theme/theme'; // Make sure you're importing from the correct path
import deepmerge from 'deepmerge';

interface ThemeProviderProps {
  mode?: 'dark' | 'light' | 'default';
  theme?: Partial<Theme>;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  mode = 'light',
  theme = {}, // Default to empty object
  children,
}) => {
  const appliedTheme =
    mode === 'default'
      ? themes.light // Use light theme if mode is default
      : themes[mode] || themes.light; // Fallback to light theme if mode is not valid

  // Merge the applied theme with any custom theme provided
  const finalTheme: Theme = {
    ...appliedTheme,
    colors: deepmerge(appliedTheme.colors || {}, theme.colors || {}),
    fonts: deepmerge(appliedTheme.fonts || {}, theme.fonts || {}),
    scale: theme.scale ?? appliedTheme.scale,
    animation: {
      scale: theme.animation?.scale ?? appliedTheme.animation?.scale,
    },
  };

  return <PaperThemeProvider theme={finalTheme}>{children}</PaperThemeProvider>;
};

export default ThemeProvider;
