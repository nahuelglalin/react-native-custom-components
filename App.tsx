import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from './src/context/theme/ThemeContext';
import { Navigator } from './src/navigator/Navigator';

//defino el theme de la app (modo oscuro o no)
// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: '',
//     // background: '#111',
//     // card: '',
//     // text: '',
//     // border: '',
//     // notification: '',
//   }
// }

const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
