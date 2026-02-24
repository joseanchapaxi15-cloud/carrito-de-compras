import { createStackNavigator } from '@react-navigation/stack';
import { LoginScrenn } from '../Screen/LoginScrenn';
import { PRIMARY_COLOR } from '../commons/constans';
import { RegistroScreen } from '../Screen/RegistroScreen';
import { useState } from 'react';
import { HomeScreen } from '../Screen/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
export const StackNavigator = () => {
    //datos de prueba
    const users: User[] = [
        {
            id: 1,
            name: "Juan Perez",
            email: "juanperez@gmail.com",
            password: "123456"
        },
        {
            id: 2,
            name: "Maria Lopez",
            email: "marialopez@gmail.com",
            password: "abcdef"
        }
    ]
    //hook useState: permite getsionar la lista de usuarios 
    const [listUsers, setListUsers] = useState<User[]>(users);

    //funcion para agregar eñ usurioa al arreglo listUser
    const handleAddUser = (user: User): void => {
        //mpodificr el estado del arreglo 
        setListUsers([...listUsers, user]);

    }


    return (
        <Stack.Navigator screenOptions={{
            cardStyle: {
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login"
                options={{ headerShown: false }}
                children={() => <LoginScrenn users={listUsers} />} />
            <Stack.Screen name="Registro"
                options={{ headerShown: false }}
                children={() => <RegistroScreen listUsers={listUsers} handleAddUser={handleAddUser} />} />
            <Stack.Screen name="Home"
                options={{ headerShown: false }}
                component={HomeScreen} />
        </Stack.Navigator>
    );
}