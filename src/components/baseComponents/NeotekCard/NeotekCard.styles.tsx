import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    marginTop: 5,
    width: '100%',
    overflow: 'hidden',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
  },
  iconContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ensure the icon scales properly
  },
  textContainer: {
    width: '70%',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'left',
  },
  description: {
    fontSize: 11,
    textAlign: 'left',
  },
});

export default styles;
