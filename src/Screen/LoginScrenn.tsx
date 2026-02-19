import React, { useState } from 'react';
import { StatusBar, Text, View, KeyboardTypeOptions } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theeme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButtonComponent } from '../components/ButtonComponent';

//interface defina laestructura de lobjeto indicado
interface Formlogin {
    email: string;
    password: string;
}

export const LoginScrenn = () => {
    //hook useState: permite getsionar el estado del formilario
    const [formLogin, setFormLogin] = useState<Formlogin>({
        email: '',
        password: ''

    });
    //funcion para capturar los valores de mi formulario 
    const handleChangeValue = (name: string, value: string): void => {
        console.log(name, " ", value, "  ");
    }
    return (
        <View>
            <StatusBar />
            <TitleComponent title="Iniciar Sesión" />
            <BodyComponent>
                <Text style={stylesGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
                <Text>Realiza tus compras de manera rapida y segura</Text>
                <View style={stylesGlobal.containerImput}>
                    <ImputComponent placeholder='Email'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email' />
                    <ImputComponent placeholder='contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password' />
                </View>
                <ButtonComponent buttonText='Iniciar' />
            </BodyComponent>
        </View>
    )
}
