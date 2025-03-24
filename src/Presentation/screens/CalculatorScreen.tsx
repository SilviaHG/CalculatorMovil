import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/CalculatorButton'
import useCalculaor from '../hooks/useCalculaor'

const CalculatorScreen = () => {

   const{
    number,
    buildNumber,
    buildSigns
   }=useCalculaor();

  return (

    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30, paddingBottom:20}}>
            <Text 
            //para que se vaya acomdando en una sola linea cuando escribimos algo muy largo
            adjustsFontSizeToFit numberOfLines={1}
            style={styles.mainResult}> {number} </Text>
            <Text style={styles.subResult}> 15 </Text>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildSigns('C')} label='C' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('+/-')} label='+/-' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={()=>buildSigns('del')} label='del' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('÷')} label='÷' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('7')} label='7' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('8')} label='8' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('9')} label='9' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('x')} label='x' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('4')} label='4' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('5')} label='5' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('6')} label='6' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('-')} label='-' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('1')} label='1' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('2')} label='2' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('3')} label='3' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('+')} label='+' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('0')} label='0' color={colors.darkGray} doubleSize></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('.')} label='.' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>console.log('=')} label='=' color={colors.orange}></CalculatorButton>
        </View>
        
    </View>
  )
}



export default CalculatorScreen
