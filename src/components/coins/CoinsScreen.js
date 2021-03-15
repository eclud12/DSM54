//importamos react
import React, { Component } from 'react';

//importar los componentes nativos de react
import { View, Text } from 'react-native';

//declaramos nuestro componente de tipo class

class CoinsScreen extends Component {
    render() {
        return (
            <View>
                <Text>Bienvenidos a mi primer pantalla en react</Text>
            </View>
        )
    }
}
export default CoinsScreen;