import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theeme/appTheme';

interface Porps{
    buttonText:string;
}

export const ButtonComponent = ({buttonText}:Porps) => {
    return (
        <TouchableOpacity style={stylesGlobal.button}>
            <Text style={stylesGlobal.buttonTex}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
