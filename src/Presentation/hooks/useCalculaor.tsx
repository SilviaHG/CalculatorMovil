import React, { useState } from 'react'
import { View } from 'react-native'

const useCalculaor = () => {
const[number,setNumber]= useState('0')


//obtener los signos que se van a usar
const buildSigns = (letterString:string)=>{
    if(letterString===('C')){
        return setNumber('0');
    }

    if(letterString===('del')){
        let newNumber = number.toString().slice(0,-1);
        return setNumber(newNumber === '' ? '0' : newNumber);
    }
}

//va obtener el numero que le demos click en la calculadora
const buildNumber = (numberString:string)=>{

    if(number.includes('.') && numberString === '.') return;

    

    if(number.startsWith('0') || number.startsWith('-0')){

        //acá usamos para agregar el punto decimal
        if(numberString==='.'){
            return setNumber(number+numberString)
        }

        //si ya hay un 0 y no hay un punto
        if(numberString === '0' && number.includes('.')){
            return setNumber(number+numberString)
        }

        //cuando el numero es diferente a 0, no tiene punto y es el primer número
        //que tocamos
        if(numberString != '0' && !number.includes('.')){
            return setNumber(numberString)
        }

        if(numberString==='0' && !number.includes('.')){
            return;
        }

        return setNumber(number+numberString);
    }

    setNumber(number + numberString);
}

return {
     //retornaremos propiedades
     number,

     //y restornaremos métodos
    buildNumber,
    buildSigns
}
  
}

export default useCalculaor
