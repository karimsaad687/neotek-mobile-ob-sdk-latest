// import React from 'react';
// import RNPickerSelect from 'react-native-picker-select';
// import { MaterialIcons } from '@expo/vector-icons';
// import { useTheme } from 'react-native-paper';
// import { View, Text, StyleSheet, I18nManager } from 'react-native';

// import type { Theme } from '../../../theme/them.types';
// import { t } from 'i18next';

// interface IdTypePickerProps {
//   idType: string | null;
//   onValueChange: (value: string) => void;
//   onClear: () => void;
//   error?: string;
// }

// const IdTypePicker: React.FC<IdTypePickerProps> = ({ idType, onValueChange, onClear, error }) => {
//   const { colors } = useTheme<Theme>();

//   const items = [
//     { label: t('national_id'), value: 'national_id' },
//     { label: t('iqa'), value: 'NAT' },
//   ];

//   const isRTL = I18nManager.isRTL; // Check if the layout is RTL

//   return (
//     <>
//       <View style={styles.pickerContainer}>
//         <RNPickerSelect
//           onValueChange={onValueChange}
//           value={idType || undefined}
//           items={items}
//           placeholder={{
//             label: t('select_id_type'),
//             value: null,
//           }}
//           style={{
//             inputAndroid: [styles.picker, { backgroundColor: colors?.Background }],
//             inputIOS: [styles.picker, { backgroundColor: '#FFFFFFFF' }],
//             iconContainer: [styles.iconContainer, { right: isRTL ? undefined : 15, left: isRTL ? 15 : undefined }], // Adjust icon position based on direction
//           }}
//           Icon={() => (idType ? <MaterialIcons name="clear" size={24} color={colors?.text} onPress={onClear} /> : null)}
//         />
//       </View>

//       {error && <Text style={[styles.error, { color: colors?.negative }]}>{error}</Text>}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   pickerContainer: {
//     marginBottom: 16,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#d3d3d3',
//     overflow: 'hidden',
//   },
//   picker: {
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     color: 'black',
//   },
//   iconContainer: {
//     top: 10,
//   },
//   error: {
//     marginBottom: 8,
//     fontSize: 14,
//   },
// });

// export default IdTypePicker;
