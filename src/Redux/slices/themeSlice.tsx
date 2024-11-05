/* eslint-disable prettier/prettier */
// src/Redux/slices/themeSlice.ts

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import themes from '../../theme/theme';
import type { Theme } from '../../theme/them.types'; // Use type-only import

interface ThemeState {
  currentTheme: Theme;
  mode: 'light' | 'dark' | 'default';
}

const initialState: ThemeState = {
  currentTheme: themes.light,
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<{
        mode: 'light' | 'dark' | 'default';
        customColors?: Partial<Theme['colors']>;
      }>
    ) => {
      const { mode, customColors } = action.payload;

      const selectedTheme =
        mode === 'default' ? themes.light : themes[mode] || themes.light;

      state.currentTheme = customColors
        ? {
            ...selectedTheme,
            colors: { ...selectedTheme.colors, ...customColors },
          }
        : selectedTheme;
      state.mode = mode;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
export type { ThemeState };
