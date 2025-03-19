import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/CalculatorButton'

const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30, paddingBottom:20}}>
            <Text style={styles.mainResult}> 1500 </Text>
            <Text style={styles.subResult}> 15 </Text>
        </View>
        <View style={styles.row}>
           <CalculatorButton label='C'></CalculatorButton>
           <CalculatorButton label='+/-'></CalculatorButton>
           <CalculatorButton label='del'></CalculatorButton>
           <CalculatorButton label='/'></CalculatorButton>
           
        </View>
        
    </View>
  )
}



export default CalculatorScreen
