import React, { useCallback, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color } from '../../constants';
import QuickDayPickerPopup from './QuickDayPickerPopup';
import { PopupHandle } from './types'

function WriteNewPage() {
  const [note, setNote] = useState<string>('');
  const quickPayPickerPopup = useRef<PopupHandle>(null);

  const handleNoteChangeText = useCallback((text: string) => {
    setNote(text);
  }, []);

  const handleDayPickerPress = useCallback(() => {
    quickPayPickerPopup.current?.show();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.paper}>
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="calendar" size={30} />
          </View>
          <TouchableOpacity
            style={styles.rightViewContainer}
            onPress={handleDayPickerPress}
          >
            <Text>{"Today"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <Icon name="text" size={30} />
          </View>
          <View style={styles.rightViewContainer}>
            <TextInput
              style={styles.textInput}
              value={note}
              onChangeText={handleNoteChangeText}
              placeholder={'Note'}
              multiline={true}
            />
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.row}>
          <View style={styles.iconContainer}>
            <View style={styles.category} />
          </View>
          <TouchableOpacity
            style={styles.rightViewContainer}
          >
            <Text>Choose category</Text>
          </TouchableOpacity>
        </View>
      </View>
      <QuickDayPickerPopup ref={quickPayPickerPopup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.DEFAULT_BACKGROUND,
    padding: 16,
  },
  paper: {
    backgroundColor: Color.CONTENT_BACKGROUND,
    padding: 12,
    borderRadius: 4,
  },
  row: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightViewContainer: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  category: {
    borderColor: Color.SEPARATOR,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: StyleSheet.hairlineWidth * 2,
  },
  borderBottom: {
    borderColor: Color.SEPARATOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textInput: {
    fontSize: 18,
    color: Color.PRIMARY_TEXT,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: Color.SEPARATOR,
    marginLeft: 40,
  },
});

export default WriteNewPage;
