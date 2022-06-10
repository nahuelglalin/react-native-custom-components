//Importo Create Context
import React, { createContext, useEffect, useReducer } from "react";
import { AppState, useColorScheme } from "react-native";
import { darkTheme, lightTheme, themeReducer, ThemeState } from './ThemeReducer';


//Interfaz de mi contexto
export interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

//Creo el contexto
export const ThemeContext = createContext({} as ThemeContextProps);

//Creo el Functional Component que va a tener el Provider exponiendo
//La informacion
export const ThemeProvider = ({children}: any) => {

    //hook para leer el theme del sistema operativo (light o dark)
    const colorScheme = useColorScheme();

   //Para usar el reducer
   //tengo que leer el theme global del celu, el del sistema operativo
   //para setear segun eso el initial state 
   const [theme, dispatch] = useReducer( themeReducer , colorScheme === 'dark' ? darkTheme : lightTheme);
   
    useEffect(() => {
        AppState.addEventListener(  )
    }, []);


   /*

   ----- SOLO FUNCIONA EN IOS --------

   //se ejecuta cada vez que el usuario abre la app
   useEffect(() => {
         if (colorScheme === 'light'){
            setLightTheme();
         } else {
             setDarkTheme();
         }
    }, []);
    */

    const setDarkTheme = () => {
        dispatch({type: 'SET_DARK_THEME'});
    }

    const setLightTheme = () => {
        dispatch({type: 'SET_LIGHT_THEME'});
    }

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setDarkTheme: setDarkTheme,
                setLightTheme: setLightTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}