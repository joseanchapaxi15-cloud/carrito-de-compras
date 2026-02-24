import React, { useState } from 'react';
import { StatusBar, Text, View, KeyboardTypeOptions, Alert, TouchableOpacity } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theeme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from '@expo/vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../commons/constans';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//interface defina laestructura de lobjeto indicado
interface Formlogin {
    email: string;
    password: string;
}
interface Props{
    users:User[]; //arreglo de usuarios desde stack navigator
}
export const LoginScrenn = ({users}:Props) => {


    //hook useState: permite getsionar el estado del formilario
    const [formLogin, setFormLogin] = useState<Formlogin>({
        email: '',
        password: ''

    });

    //hook useState: permite getsionar el estado de la contraseña 
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigator me permite navegar de una pantalla a otra 
    const navigate = useNavigation();

    //funcion para capturar los valores de mi formulario 
    const handleChangeValue = (name: string, value: string): void => {
        //console.log(name, " ", value, "  ");
        //funcion para cambair el estado del formulario 
        setFormLogin({ ...formLogin, [name]: value });

    }
    //funcion para verificar si exixte el usuario 
    const verifyUser = ():User => {
        const existUser = users.filter(user => user.email == formLogin.email && user.password == formLogin.password)[0];
        return existUser;
    }
    // funcion pata iniciar sesion
    const handleSingIn = (): void => {
        if (formLogin.email == '' || formLogin.password == '') {
            //mesaje de alerta 
            Alert.alert('Error', 'Profavor complete todos los campos');
            return;
        }
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incporrectos');
            return;
        }

        //si todo sale bien se craga la lista de productos 
        navigate.dispatch(CommonActions.navigate({ name: 'Home' }));

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
                        name='password'
                        isPassword={hiddenPassword} />
                    <Icon name={hiddenPassword == true ? 'visibility' : 'visibility-off'} color={PRIMARY_COLOR}
                        size={20}
                        style={stylesGlobal.iconPassword}
                        onPress={() => setHiddenPassword(!hiddenPassword)}
                    />
                </View>
                <ButtonComponent buttonText='Iniciar' onPress={handleSingIn} />
                <TouchableOpacity
                    onPress={() => navigate.dispatch(CommonActions.navigate({ name: 'Registro' }))}>
                    <Text style={stylesGlobal.textRedirect}>
                        No tienes cuenta? Registrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
