import React, { useCallback } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';
import { Color, ScreenKey } from '../../constants';
import EmptyContent from './EmptyContent';

function DayDetailPage({ navigation }) {
  const now = dayjs();

  const handleAddButtonPress = useCallback(() => {
    navigation.push(ScreenKey.WRITE_NEW_PAGE);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.monthContainer}>
          <Text style={styles.month}>{now.format('MMM')}</Text>
        </View>
        <View style={styles.dayInformation}>
          <Text style={styles.day}>{`${now.format('DD')} - ${now.format('ddd')}`}</Text>
        </View>
      </View>
      <EmptyContent />
      <TouchableOpacity style={styles.addButtonContainer} onPress={handleAddButtonPress}>
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
  monthContainer: {
    backgroundColor: Color.DARK_YELLOW,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    alignSelf: 'flex-end',
  },
  month: {
    fontSize: 18,
    color: Color.PRIMARY_TEXT,
  },
  dayInformation: {
    backgroundColor: Color.CONTENT_BACKGROUND,
    padding: 12,
  },
  day: {
    fontSize: 16,
    color: Color.PRIMARY_TEXT,
    textDecorationLine: 'underline',
  },
  addButtonContainer: {
    padding: 12,
    backgroundColor: 'yellow',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  addButtonLabel: {
    color: Color.PRIMARY_TEXT,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default DayDetailPage;
