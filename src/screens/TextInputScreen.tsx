import React, { useContext, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext';
import { useForm } from '../hooks/useForm';


export const TextInputScreen = () => {

    const {theme} = useContext(ThemeContext);

    //manejo el estado del form usando el hook useForm
    const {form, onChange, isSubscribed} = useForm({
        name: '',
        email: '',
        isSubscribed: false,
        phone: '',
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ marginHorizontal: 20 }}>

                        <HeaderTitle title="TextInputs" />

                        <TextInput
                            style={{...styles.inputStyle, color: theme.colors.text, borderColor: theme.colors.text}}
                            onChangeText={(value) => onChange(value, 'name')}
                            placeholder="Nombre"
                            autoCorrect={false}
                            autoCapitalize="words"
                        />


                        <TextInput
                            style={{...styles.inputStyle, color: theme.colors.text, borderColor: theme.colors.text}}
                            onChangeText={(value) => onChange(value, 'email')}
                            placeholder="Email"
                            autoCorrect={false}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            keyboardAppearance='dark'
                        />

                        <View style={styles.switchRow}>
                            <Text style={{...styles.switchText, color: theme.colors.text}}>Esta suscrito</Text>
                            <CustomSwitch
                                isOn={isSubscribed}
                                onChange={(value) => onChange(value, 'isSubscribed')}
                            />
                        </View>

                        <TextInput
                            style={{...styles.inputStyle, color: theme.colors.text, borderColor: theme.colors.text}}
                            onChangeText={(value) => onChange(value, 'phone')}
                            placeholder="Telefono"
                            keyboardType="numeric"
                        />

                        <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText: {
        fontSize: 25,
      },
      switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
      }
})
