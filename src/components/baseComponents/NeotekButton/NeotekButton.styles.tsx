import { StyleSheet } from 'react-native';
import { scale } from 'react-native-utils-scale';
const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: scale(4),
    paddingHorizontal: scale(16),
    borderRadius: 7,
    marginVertical: scale(8),
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
  },
});
export default styles;
