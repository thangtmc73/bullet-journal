import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from './Item';

interface SectionProps {
  title: string;
  items: Array<number>;
}

function Section({ title, items }: SectionProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.contentContainer}>
        {items?.map((type: number) => {
          return <Item type={type} key={type} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff3d4',
    borderRadius: 4,
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 8,
  },
});

export default Section;
