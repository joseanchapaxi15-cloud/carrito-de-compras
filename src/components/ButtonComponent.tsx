import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theeme/appTheme';

interface Porps{
    buttonText:string;
    onPress: () => void;
}

export const ButtonComponent = ({buttonText,onPress}:Porps) => {
    return (
        <TouchableOpacity style={stylesGlobal.button}
        onPressOut={onPress}>
            <Text style={stylesGlobal.buttonTex}>{buttonText}</Text>
        </TouchableOpacity>
    )
}
