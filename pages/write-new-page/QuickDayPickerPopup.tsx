import React, { forwardRef, Ref, useCallback, useImperativeHandle, useState } from 'react';
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';
import { Color } from '../../constants';
import { PopupHandle } from './types';

function QuickDayPickerPopup(props: any, ref: Ref<PopupHandle>) {
  const [visible, setVisisble] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisisble(true);
    },
    hide: () => {
      setVisisble(false);
    },
  }));

  function close() {
    setVisisble(false);
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      style={styles.modal}
    >
      <TouchableOpacity
        style={styles.outerView}
        activeOpacity={1}
        onPress={close}
      />
      <View style={styles.mainView}>
        <View style={styles.mainButtonsContainer}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Tomorrow</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Today</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.text}>Custom</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainButtonsContainer}>
          <TouchableOpacity style={styles.buttonContainer} onPress={close}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  outerView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  mainView: {
    width: '100%',
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  mainButtonsContainer: {
    borderRadius: 4,
    backgroundColor: Color.CONTENT_BACKGROUND,
    marginTop: 8,
  },
  buttonContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Color.PRIMARY_TEXT,
    fontWeight: '500',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: Color.SEPARATOR,
  },
});

export default forwardRef(QuickDayPickerPopup);

