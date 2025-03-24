import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'
import CalculatorButton from '../components/CalculatorButton'
import useCalculaor from '../hooks/useCalculaor'

const CalculatorScreen = () => {

   const{
    number, 
    prevNumber,
    formula,
    result,
    buildNumber,
    clean,
    deleteNumbers,
    buildSigns,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult
    
   }=useCalculaor();

  return (

    <View style={styles.calculatorContainer}>
        <View style={{paddingHorizontal:30, paddingBottom:20}}>
            <Text 
            //para que se vaya acomdando en una sola linea cuando escribimos algo muy largo
            adjustsFontSizeToFit numberOfLines={1}
            style={styles.mainResult}> {formula} </Text>
            <Text 
            adjustsFontSizeToFit 
            numberOfLines={1}
            
            style={styles.subResult}> {(result==='0')? '' : result} </Text>
            
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={clean} label='C' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={buildSigns} label='+/-' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={deleteNumbers} label='del' color={colors.lightGray} blackText></CalculatorButton>
           <CalculatorButton onPress={divideOperation} label='÷' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('7')} label='7' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('8')} label='8' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('9')} label='9' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={multiplyOperation} label='x' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('4')} label='4' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('5')} label='5' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('6')} label='6' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={subtractOperation} label='-' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('1')} label='1' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('2')} label='2' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('3')} label='3' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={addOperation} label='+' color={colors.orange}></CalculatorButton>
        </View>
        <View style={styles.row}>
           <CalculatorButton onPress={()=>buildNumber('0')} label='0' color={colors.darkGray} doubleSize></CalculatorButton>
           <CalculatorButton onPress={()=>buildNumber('.')} label='.' color={colors.darkGray}></CalculatorButton>
           <CalculatorButton onPress={calculateResult} label='=' color={colors.orange}></CalculatorButton>
        </View>
        
    </View>
  )
}



export default CalculatorScreen
