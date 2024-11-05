/* eslint-disable prettier/prettier */
// NeoTekTextInput.styles.ts

import { StyleSheet } from 'react-native';
import { HP , WP } from '../../../utils/helper';

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.1,
    paddingHorizontal: WP(1),
    borderColor: 'gray',
    backgroundColor: 'white',
    paddingVertical: 0,
    height: HP(8),
    borderRadius: 1,
    marginBottom:HP(2)
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default styles;
