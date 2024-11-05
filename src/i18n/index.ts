import i18next from 'i18next';
import type { InitOptions, TFunctionDetailedResult } from 'i18next';
import { I18nManager as RNI18nManager } from 'react-native';
import { initReactI18next } from 'react-i18next';
import { fallback, supportedLocales } from './i18n';
import { getLocales } from 'expo-localization';
import AsyncStoragePlugin from 'i18next-react-native-async-storage';
// import * as Updates from 'expo-updates';

// Define the shape of your style object
type StyleObject = { [key: string]: any };

// Define the type for the map parameter in select function
type DirectionalStyles = { rtl: StyleObject; ltr: StyleObject };

// Define options for translation function
type TranslationOptions = {
  [key: string]: any;
};

interface LocaleTranslation {
  [key: string]: string | object; // Adjust this type based on your JSON structure
}

interface LocaleInfo {
  name: string;
  translation: LocaleTranslation;
}

export type TranslationResult =
  | string
  | TFunctionDetailedResult<string, TranslationOptions>
  | { toString: () => string }; // Include an object type that has a toString method

type CustomTFunction = (
  key: string,
  options?: TranslationOptions
) => TranslationResult;
const i18n = {
  init: (): Promise<void> =>
    i18next
  .use(
    AsyncStoragePlugin((callback: (lng: string) => void) =>
      callback(getLocales()[0]?.languageCode ?? 'en')
    )
  )

      .use(initReactI18next)
      .init({
        compatibilityJSON: 'v3',
        fallbackLng: fallback,
        resources: supportedLocales as Record<string, LocaleInfo>,
      } as unknown as InitOptions)
      .then(() => undefined), // Ensure that it resolves with void

  t: (key: string, options?: TranslationOptions): TranslationResult => {
    const result = i18next.t(key, options);
    return typeof result === 'string' ? result : (result as { toString: () => string }).toString();
  },

  get locale(): string {
    return i18next.language;
  },

  get dir(): string {
    return i18next.dir().toUpperCase();
  },

  get isRTL(): boolean {
    let direction = this.dir;
    return direction === 'RTL';
  },

  select(map: DirectionalStyles): StyleObject {
    const key = this.isRTL ? 'rtl' : 'ltr';
    return map[key];
  },

  async checkRtl(lang: string): Promise<void> {
    const RNDir = RNI18nManager.isRTL ? 'RTL' : 'LTR';

    // RN doesn't always correctly identify native
    // locale direction, so we force it here.
    if (this.dir !== RNDir) {
      const isLocaleRTL = this.dir === 'RTL';
      await i18next.changeLanguage(lang);
      RNI18nManager.forceRTL(isLocaleRTL);
      // RN won't set the layout direction if we
      // don't restart the app's JavaScript.
    }
  },

  async changeLanguage(lang: 'en' | 'ar'): Promise<void> {
    await i18next.changeLanguage(lang);
    // if (__DEV__) {
    //   DevSettings.reload();
    // } else {
    //   await Updates.reloadAsync();
    // }
  },
};

// Export the translation function with correct typing
export const t: CustomTFunction = i18n.t;

export default i18n;
