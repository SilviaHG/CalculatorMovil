import React, { useEffect, useRef, useState } from 'react'
import CalculatorButton from '../components/CalculatorButton';

enum Operators {
    add='+',
    subtract='-',
    multiply='*',
    divide='÷',

}

const useCalculaor = () => {
    //esta formula lo que hace es que se vea algo como: (4+8)
  
    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')
    const lastOperation = useRef<Operators>(null);
    const[formula, setFormula]=useState('')
    const[result, setResult]=useState('0')

    //es como el onchange
    useEffect(()=>{

         setFormula(number)
         const firstFormulaPart = formula.split(' ').at(0)
        if(lastOperation.current){
            
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }

            //cada que cambie el resultado se va ir actualizando
            const result = CalculateSubResult();
            setResult(`${result}`)

    },[number, formula])

    const setLastNumber = () => {

        
        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1))
        } else {
            setPrevNumber(number)
        }
        setNumber('') // lo colocamos en vacío para que no muestre ese 0 después de colocar el signo
    }

    const divideOperation = () => {
        setLastNumber();
        lastOperation.current = Operators.divide;
    }
    const multiplyOperation = () => {
        setLastNumber();
        lastOperation.current = Operators.multiply;
    }
    const subtractOperation = () => {
        setLastNumber();
        lastOperation.current = Operators.subtract;
    }
    const addOperation = () => {
        setLastNumber();
        lastOperation.current = Operators.add;
    }
    //obtener los signos que se van a usar
    const buildSigns = () => {

        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }
        setNumber('-' + number)
    }

    const clean = () => {
        setNumber('0'),
        setPrevNumber('0'),
        setFormula('0'),
        lastOperation.current=null
    }

    const deleteNumbers = () => {
        let newNumber = number.toString().slice(0, -1);
        setNumber(newNumber === '' ? '0' : newNumber);
    }

    //va obtener el numero que le demos click en la calculadora
    const buildNumber = (numberString: string) => {

        if (number.includes('.') && numberString === '.') return;



        if (number.startsWith('0') || number.startsWith('-0')) {

            //acá usamos para agregar el punto decimal
            if (numberString === '.') {
                return setNumber(number + numberString)
            }

            //si ya hay un 0 y no hay un punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }

            //cuando el numero es diferente a 0, no tiene punto y es el primer número
            //que tocamos
            if (numberString != '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            if (numberString === '0' && !number.includes('.')) {
                return;
            }

            return setNumber(number + numberString);
        }

        setNumber(number + numberString);
    }

    //acá creamos el cálculo

    const calculateResult = () => {
       
        const result = CalculateSubResult()

        setFormula(`${result}`)

        setPrevNumber('0')

        setResult(`${result}`)

    }


    const CalculateSubResult=():number=>{
        const[firstValue,operation,secondValue]=formula.split(' ')
        const num1=Number(firstValue)
        const num2=Number(secondValue)
        
        if(isNaN(num2)) return num1

        switch (operation) {
            case Operators.subtract:
                return num1 - num2

            case Operators.multiply:
                return num1 * num2

            case Operators.divide:
                return num1/num2

            case Operators.add:
                return num1 + num2

            default:
                throw new Error('Operation not implement');
        }
    }
    

    return {
        //retornaremos propiedades
        number, prevNumber, formula, result,

        //y restornaremos métodos
        buildNumber,
        buildSigns,
        clean,
        deleteNumbers,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult,
        CalculateSubResult
    }

}

export default useCalculaor
