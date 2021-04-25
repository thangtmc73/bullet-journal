import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Item from './Item';
import { Color } from '../../../constants';

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
    backgroundColor: Color.VERY_LIGHT_YELLOW,
    borderRadius: 4,
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.PRIMARY_TEXT,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: Color.CONTENT_BACKGROUND,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 8,
    borderRadius: 4,
  },
});

export default Section;
