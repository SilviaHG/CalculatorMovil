import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from '../../config/theme/app-theme'

interface Props{
    label:string
}
const CalculatorButton = ({
    label
}:Props) => {
    return (
        <View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
        </View>
    )
}

export default CalculatorButton
