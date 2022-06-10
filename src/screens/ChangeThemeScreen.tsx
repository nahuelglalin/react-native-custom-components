import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {

  const { setLightTheme, setDarkTheme, theme } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title={'Change Theme'} />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 20,
          }}
          onPress={setLightTheme}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20
            }}
          >
            Light
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: theme.colors.primary,
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}
        onPress={setDarkTheme}
      >
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20
          }}
        >
          Dark
        </Text>

      </TouchableOpacity>

      </View>

      
    </View>
  )
}
