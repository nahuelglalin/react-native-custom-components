import { Theme } from "@react-navigation/native"

//tipos de acciones que van a existir en mi app
type ThemeAction = {type: 'SET_LIGHT_THEME'} | {type: 'SET_DARK_THEME'};


//interfaz de mi state.
//extiende de Theme pq necesito que mi state tenga algunas
//de las propiedades que existen en la class Theme
export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark';
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    dark: false,//esta prop tiene del tipo de dato "Theme"
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'dark',
    dividerColor: 'rgba(0, 0, 0, 0.7)',
    dark: true,//esta prop tiene del tipo de dato "Theme"
    colors: {
        primary: '#75CEDB',
        background: '#111',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'teal',
    }
}


//funcion reducer del context
export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    
    switch (action.type) {
        case 'SET_LIGHT_THEME':
            console.log("Seteando light theme...")
            return {
                ...lightTheme
            }
        case 'SET_DARK_THEME':
            console.log("Seteando dark theme...")
            return {
                ...darkTheme
            }
        default:
            return state;
    }

}