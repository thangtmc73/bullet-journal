import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Color } from '../../constants';

function EmptyContent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Empty!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.CONTENT_BACKGROUND,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Color.SUB_TEXT,
  },
});

export default EmptyContent;
