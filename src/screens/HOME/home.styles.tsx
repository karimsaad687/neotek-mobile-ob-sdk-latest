import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    paddingHorizontal: 8,
  },
  cardContainer: {
    width: '100%',
    marginVertical: 8,
    alignSelf: 'center',
    flexDirection: 'column',
  },

  languageButton: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
});

export default styles;
