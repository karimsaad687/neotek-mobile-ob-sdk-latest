// src/screens/IncomeVerificationScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SingleApiScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Single Api Screen</Text>
      <Text style={styles.underDevelopment}>Under Development</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  underDevelopment: {
    marginTop: 16,
    fontSize: 18,
    color: 'gray',
  },
});

export default SingleApiScreen;
