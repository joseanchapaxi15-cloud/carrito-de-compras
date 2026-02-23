import React from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { stylesGlobal } from '../theeme/appTheme';


interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue:(name:string , value:string)=> void;
    name:string;
    isPassword?: boolean;// cuando ustedes vcenado una propiedad con sigon ode pregunat es una propiedad opcional 
}

export const ImputComponent = ({ placeholder,keyboardType, handleChangeValue, name,isPassword=false}: Props) => {
    return (
        <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={(value)=>handleChangeValue(name,value)}
        secureTextEntry={isPassword}
        style={stylesGlobal.input}  />
    )
}


