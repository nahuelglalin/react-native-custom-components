import React from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Modal Screen" />

            <Button
                title="Abrir Modal"
                onPress={() => setIsVisible(true)}
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >
                {/* Background negro */}
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {/* Contenido del modal */}
                    <View 
                        style={{
                            backgroundColor: '#fff',
                            width: 200,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowOffset: { width: 0, height: 0 },
                            shadowOpacity: 0.25,
                            elevation: 19,
                            borderRadius: 5
                        }}
                    >
                         <Text style={{fontSize: 20, fontWeight: 'bold'}}>Modal</Text>
                        <Text>Cuerpo del Modal</Text>
                        <Button 
                            title="Cerrar Modal"
                            onPress={() => setIsVisible(false)}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
