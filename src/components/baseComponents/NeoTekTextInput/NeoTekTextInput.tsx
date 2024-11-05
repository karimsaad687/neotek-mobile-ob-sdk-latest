/* eslint-disable prettier/prettier */
import React from 'react';
import { Text } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import styles from './NeoTekTextInput.styles';
import type { NeoTekTextInputProps } from './NeoTkTextInput.types';
// import i18next from 'i18next'; // Import i18next for language direction

interface CustomTextInputProps extends NeoTekTextInputProps {
  error?: string;
  direction?: 'rtl' | 'ltr'; // Optional prop to override default direction
  placeholder: string;
  value?: string;
  setValue: any;
}

const NeoTekTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  error,
  // direction, // Use direction prop if provided
  style,
  // fontFamily,
  selectionColor, // Ensure selectionColor is defined as string or undefined
  // ...props
  value,
  setValue,
}) => {
  // Determine the text direction based on the language
  // const resolvedDirection = direction || (i18next.dir() === 'rtl' ? 'rtl' : 'ltr');

  // Convert selectionColor to string or undefined
  const resolvedSelectionColor = selectionColor
    ? String(selectionColor)
    : undefined;

  return (
    <>
      <PaperTextInput
        value={value}
        onChangeText={setValue}
        style={[
          styles.input,
          style,
          error ? styles.errorBorder : null,
          {
            // textAlign: resolvedDirection === 'rtl' ? 'right' : 'left',
            // writingDirection: resolvedDirection, // Apply writingDirection for RTL support
            // fontFamily: fontFamily,
          },
        ]}
        placeholder={placeholder}
        //{...props}
        selectionColor={resolvedSelectionColor} // Pass resolved selectionColor
        cursorColor={resolvedSelectionColor} // Pass resolved selectionColor as cursorColor
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default NeoTekTextInput;
