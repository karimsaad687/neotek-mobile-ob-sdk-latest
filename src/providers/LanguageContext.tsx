/* eslint-disable prettier/prettier */
import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import i18next from 'i18next';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState(i18next.language);

  const changeLanguage = (lang: string) => {
    i18next
      .changeLanguage(lang)
      .then(() => {
        setLanguage(lang);
      })
      .catch((error) => {
        console.warn('Error changing language:', error);
      });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    console.error('useLanguage must be used within a LanguageProvider');
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
