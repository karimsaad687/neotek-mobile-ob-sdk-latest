import AR from './locales/ar.json';
import EN from './locales/en.json';

// Define the type for the locale data
interface LocaleTranslation {
  [key: string]: string | object; // Adjust this type based on your JSON structure
}

interface LocaleInfo {
  name: string;
  translation: LocaleTranslation;
}

// Define the fallback locale type
export const fallback: string = 'en';

// Define the supported locales type
export const supportedLocales: Record<string, LocaleInfo> = {
  en: {
    name: 'English',
    translation: EN,
  },
  ar: {
    name: 'العربية',
    translation: AR,
  },
};
