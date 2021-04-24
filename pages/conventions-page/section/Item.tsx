import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BulletSymbol } from '../../../constants';

function Item({ type }: { type: number }) {
  const { symbol, shortName }: { symbol: string; shortName: string } =
    BulletSymbol[type] || {};
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text>{symbol}</Text>
      </View>
      <Text style={styles.text}>{shortName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
  },
});

export default Item;
