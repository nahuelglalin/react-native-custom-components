import React from 'react'
import { Button, View, Alert } from 'react-native'
import prompt from 'react-native-prompt-android'
import { HeaderTitle } from '../components/HeaderTitle'

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Este es el mensaje de la alerta",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "Aceptar", onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    const showPrompt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                cancelable: false,
                defaultValue: 'value',
                placeholder: 'placeholder'
            }
        );
        //------ ESTO SOLO FUNCIONA EN IOS ------
        // Alert.prompt(
        //     "Titulo",
        //     "Este es el mensaje de la alerta",
        //     [
        //         {
        //             text: "Cancelar",
        //             onPress: () => console.log("Cancel Pressed"),
        //             style: "destructive"
        //         },
        //         {
        //             text: "Aceptar",
        //             onPress: (value) => console.log(value)
        //         }
        //     ]
        //)
    }

    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="Alert" />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />

            <View style={{margin: 20}}>

            </View>

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />

        </View>
    )
}
