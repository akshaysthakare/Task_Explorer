import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ErrorView = ({ message, onRetry }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{message}</Text>
    <Button title="Retry" onPress={onRetry} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ErrorView;