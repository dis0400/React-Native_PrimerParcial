import { StyleSheet } from 'react-native';

const themes = {
  light: {
    background: '#E3E9EC',
    buttonBackground: '#F4AB41',
    buttonText: '#FFFFFF',
    displayText: '#F4AB41',
    buttonSecondary: '#555A60',
    buttonEquals: '#E3E9EC',
    buttonEqualsText: '#555A60'
  },
  dark: {
    background: '#555A60',
    buttonBackground: '#F4AB41',
    buttonText: '#FFFFFF',
    displayText: '#F4AB41',
    buttonSecondary: '#E3E9EC',
    buttonEquals: '#555A60',
    buttonEqualsText: '#E3E9EC'
  },
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  display: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
  },
  displayText: {
    fontSize: 50,
  },
  operationText: {
    fontSize: 25,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
});

export default themes;



