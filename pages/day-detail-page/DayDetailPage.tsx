import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Color } from '../../constants';

function DayDetailPage() {
  return (
    <View style={styles.container}>
      <Text>Today</Text>
      <TouchableOpacity style={styles.addButtonContainer}>
        <Text style={styles.addButtonLabel}>Write more something!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.DEFAULT_BACKGROUND,
    flex: 1,
    padding: 16,
  },
  addButtonContainer: {
    padding: 12,
    backgroundColor: 'yellow',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonLabel: {
    color: Color.PRIMARY_TEXT,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default DayDetailPage;
