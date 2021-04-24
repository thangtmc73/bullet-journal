import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function ConventionsPage() {
  return (
    <View style={styles.container}>
      <Text>Conventions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConventionsPage;
