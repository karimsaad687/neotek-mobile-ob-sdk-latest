import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '90%',
    padding: 15,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'left',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
