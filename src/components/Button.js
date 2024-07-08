import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, title, color, textColor = 'white', width = 80, height = 80, borderRadius = 40 }) => (
  <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color, width, height, borderRadius }]}>
    <Text style={[styles.text, { color: textColor }]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default Button;



