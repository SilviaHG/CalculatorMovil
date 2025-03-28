/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet, Text, View,
} from 'react-native';
import CalculatorScreen from './Presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';

function App() {

  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
        />
        <CalculatorScreen></CalculatorScreen>
        </View>
  );
}            

export default App;