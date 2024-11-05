/* eslint-disable prettier/prettier */

import NeotekOB from './navigation/Navigation';
import themes from './theme/theme';
import type { Theme } from './theme/them.types';
import i18n from './i18n';

const { dark: darkTheme, light: lightTheme } = themes;


export const changeLanguage = async (lang: 'en' | 'ar') => {
  await i18n.changeLanguage(lang);
};

export { NeotekOB, darkTheme, lightTheme };
export type { Theme };
