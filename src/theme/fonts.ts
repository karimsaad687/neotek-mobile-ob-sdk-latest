import { DefaultTheme } from 'react-native-paper';

const fonts = {
  regular: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Arial',
    fontWeight: '300',
  },
  thin: {
    fontFamily: 'Arial',
    fontWeight: '100',
  },
};

const themeFonts = {
  ...DefaultTheme.fonts,
  regular: fonts.regular,
  medium: fonts.medium,
  light: fonts.light,
  thin: fonts.thin,
};

export default themeFonts;
