//importar react
import React from 'react';

//Import libreria stack
import {createStackNavigator} from '@react-navigation/stack';
//import { StackActions } from '@react-navigation/native';

//importamos nuestro componente de CoinsScreen
import CoinsScreen from './CoinsScreen';

//declarar constante para stack
const Stack = createStackNavigator();


//Enpezamos a construir nuestro componente de tipo stalles

const CoinsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dulce Maria Sevilla Ortiz"  component={CoinsScreen}/>
        </Stack.Navigator>
    )
}

export default CoinsStack;