//CustomHook para hacer el efecto de fadeIn. Es una animacion para que el 
//componente aparezca con un fadeIn.

import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {

    //useRef es como el useState, pero no dispara "re-renders"
    //es decir, no vuelve a renderizar el componente
    const opacity = useRef(new Animated.Value(0)).current;

    //"state" llamado position animar la caja.
    const position = useRef(new Animated.Value(0)).current;

    //funcion para hacer el efecto de fadeIn
    const fadeIn = () => {
        //animacion de fadeIn
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    //funcion para hacer el efecto de fadeOut
    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }

    const startMovingPosition = (initPosition: number = -100) => {
        //se inicia en el valor que me mande la persona
        position.setValue(initPosition);
         //animacion para que el componente se mueva
        Animated.timing(position, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
            //easing: Easing.bounce
        }).start();

    }



    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}
