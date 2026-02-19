import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import { stylesGlobal } from '../theeme/appTheme';

interface Props{
    title: string;
}

export const TitleComponent = ({title}:Props) => {
    const {height}= useWindowDimensions ();
    return (
        <Text style={{...stylesGlobal.title,
            height: height * 0.15 
        }}>{title}</Text>
    )
}
