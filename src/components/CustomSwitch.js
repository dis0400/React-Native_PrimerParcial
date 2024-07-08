import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomSwitch = ({ value, onValueChange }) => {
  return (
    <TouchableOpacity
      style={[styles.switch, value ? styles.switchOn : styles.switchOff]}
      onPress={onValueChange}
    >
      <View style={[styles.thumb, value ? styles.thumbOn : styles.thumbOff]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    padding: 5,
    position: 'relative',
  },
  switchOn: {
    backgroundColor: '#E3E9EC',
  },
  switchOff: {
    backgroundColor: '#F4AB41',
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbOn: {
    backgroundColor: '#F4AB41',
    left: 35,
  },
  thumbOff: {
    backgroundColor: '#555A60',
    left: 5,
  },
});

export default CustomSwitch;








