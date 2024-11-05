// src/theme/darkTheme.ts
import type { Theme } from './them.types';

const darkTheme: Theme = {
  colors: {
    primary: '#000000',
    secondary: '#ffffff',
    positive: '#00e676',
    negative: '#d32f2f',
    rejected: '#f44336',
    expired: '#9e9e9e',
    pending: '#ff9800',
    text: '#ffffff',
    heading: '#cccccc',
    subheading: '#999999',
    Background: '#121212',
    backgroundAlt: '#1c1c1e',
    card: '#1e1e1e',
    border: '#333333',
    highlight: '#bb86fc',
    button: '#333333',
    buttonText: '#ffffff',
    shadow: 'rgba(0, 0, 0, 0.2)',
    inputBackground: '#2c2c2e',
    placeholder: '#757575',
    overlay: 'rgba(0, 0, 0, 0.5)',
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

export default darkTheme;
