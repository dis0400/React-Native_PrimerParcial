import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import CustomSwitch from '../components/CustomSwitch';
import { styles as appStyles } from '../config/theme/app-themes';
import themes from '../config/theme/app-themes';

const CalculatorScreen = ( ) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? themes.dark : themes.light;
  const [currentValue, setCurrentValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState('');
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const handleTap = (type, value) => {
    if (type === 'number') {
      setCurrentValue(`${currentValue === '0' ? '' : currentValue}${value}`);
      setOperation(`${operation}${value}`);
    }
    if (type === 'operator') {
      setOperator(value);
      setPreviousValue(currentValue);
      setCurrentValue('0');
      setOperation(`${operation} ${value} `);
    }
    if (type === 'equal') {
      const current = parseFloat(currentValue);
      const previous = parseFloat(previousValue);

      let result;
      if (operator === '+') {
        result = previous + current;
      } else if (operator === '-') {
        result = previous - current;
      } else if (operator === '*') {
        result = previous * current;
      } else if (operator === '/') {
        result = previous / current;
      }

      setCurrentValue(result.toString());
      setOperation(`${operation}`);
      setOperator(null);
      setPreviousValue(null);
    }
    if (type === 'clear') {
      setCurrentValue('0');
      setOperator(null);
      setPreviousValue(null);
      setOperation('');
    }
  };

  return (
    <View style={[appStyles.container, { backgroundColor: theme.background }]}>

      <View style={appStyles.display}>
      <Text style={[appStyles.displayText, { color: theme.displayText }]}>{currentValue}</Text>
        <Text style={[appStyles.operationText, { color: theme.displayText }]}>{operation}</Text>
      </View>
      <View style={localStyles.switchContainer}>
        <CustomSwitch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
      <View style={appStyles.row}>
        <Button title="AC" textColor={theme.displayText} onPress={() => handleTap('clear')} />
        <Button title="+/-" color={theme.buttonBackground} onPress={() => {}} />
        <Button title="%" color={theme.buttonBackground} onPress={() => {}} />
        <Button title="÷" color={theme.buttonBackground} onPress={() => handleTap('operator', '/')} />
      </View>
      <View style={appStyles.row}>
        <Button title="7" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 7)} />
        <Button title="8" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 8)} />
        <Button title="9" textColor={theme.buttonEqualsText}onPress={() => handleTap('number', 9)} />
        <Button title="*" color={theme.buttonBackground} onPress={() => handleTap('operator', '*')} />
      </View>
      <View style={appStyles.row}>
        <Button title="4" textColor={theme.buttonEqualsText}onPress={() => handleTap('number', 4)} />
        <Button title="5" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 5)} />
        <Button title="6" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 6)} />
        <Button title="-" color={theme.buttonBackground} onPress={() => handleTap('operator', '-')} />
      </View>
      <View style={appStyles.row}>
        <Button title="1" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 1)} />
        <Button title="2" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 2)} />
        <Button title="3" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 3)} />
        <Button title="+" color={theme.buttonBackground} onPress={() => handleTap('operator', '+')} />
      </View>
      <View style={appStyles.row}>
        <Button title="0" textColor={theme.buttonEqualsText} onPress={() => handleTap('number', 0)} />
        <Button title="." textColor={theme.buttonEqualsText} onPress={() => handleTap('number', '.')} />
        <Button title="=" color={theme.buttonBackground}  onPress={() => handleTap('equal')} width={170} height={80} borderRadius={40} />
      </View>
    </View>
  );
};
const localStyles = StyleSheet.create({
    switchContainer: {
      position: 'absolute',
      top: 30,
      left: 35,
    },
  });

export default CalculatorScreen;