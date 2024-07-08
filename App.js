import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import CalculatorScreen from './src/screens/CalculatorScreen';
import themes from './src/config/theme/app-themes';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculadorita">
          {(props) => <CalculatorScreen {...props} theme={themes[theme]} toggleTheme={toggleTheme} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;