import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { BodyComponent } from '../components/BodyComponent';
import { stylesGlobal } from '../theeme/appTheme';
import { ImputComponent } from '../components/ImputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';


interface FormRegister {
  name: string;
  email: string;
  password: string;
}
//interface que defian las propiedade dle ocmpónete 
interface Props {
  listUsers: User[];
  handleAddUser: (user: User) => void;
}

export const RegistroScreen = ({ listUsers, handleAddUser }: Props) => {

  //hook usestate: permite getsionar el estado del formilario

  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''

  });

  //funcion para capturar los valores de mi formulario 
  const handleChangeValue = (name: string, value: string): void => {

    setFormRegister({ ...formRegister, [name]: value });

  }
  //funsion para verificar si exixte el usuario
  const verifyUser = () => {
    const existUser = listUsers.filter(user => user.email == formRegister.email)[0];
    return existUser;


  }
  //funsion para registrarse
  const handleRegister = (): void => {
    //validad que los cmapos esten llenos 
    if (formRegister.name == '' || formRegister.email == '' || formRegister.password == '') {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }
    //valiadra cmapo de iniioc de sesion 
    if (verifyUser()) {
      Alert.alert('Error', 'El usuario ya se encuentra registrado');
      return;
    }
    //funsion para generar los id de los nuevos usuarios 
    const getIdUser = () => {
      const getId = listUsers.length + 1;
      return getId;
    }

    //registrar usuarios 
    //crear objeto User
    const newUser: User = {
      id: getIdUser(),
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password
    }

    // agregar objeto al arreglo 
    handleAddUser(newUser);
    Alert.alert('Registro', 'Usuario registrado correctamente');
    //redireccionar al login
    navigate.goBack();
    
  }

  const navigate = useNavigation();

  return (
    <View>
      <TitleComponent title='Registrate' />
      <BodyComponent>
        <Text style={stylesGlobal.titleWelcome}>Bienvenido de nuevo!</Text>
        <Text>Realiza tus compras de manera rapida y segura</Text>
        <View style={stylesGlobal.containerImput}>
          <ImputComponent placeholder='Nombre'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='name' />
          <ImputComponent placeholder='Email'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <ImputComponent placeholder='contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password' />
        </View>
        <ButtonComponent buttonText='Registrar' onPress={handleRegister}  />
        <TouchableOpacity
          onPress={() => navigate.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={stylesGlobal.textRedirect}>
            Ya tienes cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}
