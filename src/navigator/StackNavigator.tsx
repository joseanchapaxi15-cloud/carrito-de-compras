import { createStackNavigator } from '@react-navigation/stack';
import { LoginScrenn } from '../Screen/LoginScrenn';
import { PRIMARY_COLOR } from '../commons/constans';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            cardStyle:{
                backgroundColor: PRIMARY_COLOR
            }
        }}>
            <Stack.Screen name="Login"
            options={{ headerShown: false }}
            component={LoginScrenn} />
        </Stack.Navigator>
    );
}