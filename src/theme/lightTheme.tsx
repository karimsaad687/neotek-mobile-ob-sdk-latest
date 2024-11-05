// src/theme/lightTheme.ts
import type { Theme } from './them.types';

const lightTheme: Theme = {
  colors: {
    primary: '#0CBAB4',
    secondary: '#D8ECEB',
    positive: '#00e676',
    negative: '#d32f2f',
    rejected: '#f44336',
    expired: '#767676FF',
    pending: '#ff9800',
    text: '#000000',
    heading: '#333333',
    subheading: '#666666',
    Background: '#ffffff',
    backgroundAlt: '#F7F8FA',
    card: '#f5f5f5',
    overlay: 'rgba(0, 0, 0, 0.5)',
    border: '#E0E0E0',
    highlight: '#FFEB3B',
    button: '#0CBAB4',
    buttonText: '#FFFFFF',
    shadow: 'rgba(0, 0, 0, 0.1)',
    inputBackground: '#F9F9F9',
    placeholder: '#9E9E9E',
    lightpink: '#FFB6C1',


  },
  fonts: {
    regular: 'System',
    medium: 'System-Medium',
    bold: 'System-Bold',
    italic: 'System-Italic',
  },
  scale: 1.0,
  animation: {
    scale: 1.0,
  },
};

export default lightTheme;
