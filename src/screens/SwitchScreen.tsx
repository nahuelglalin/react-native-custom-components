import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const SwitchScreen = () => {

  const {theme} = useContext(ThemeContext);

  const [state, setState] = React.useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  const { isActive, isHungry, isHappy } = state;

  const onChange = (value: boolean, field: string) => {
    setState({
        ...state,
        [field]: value
      });
  }


  return (
    <View style={{ marginHorizontal: 20 }}>

      <HeaderTitle title="Switches" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.text}}>Is Active</Text>
        <CustomSwitch 
          isOn={isActive} 
          onChange={(value) => onChange(value, 'isActive')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.text}}>Is Hungry</Text>
        <CustomSwitch 
          isOn={isHungry} 
          onChange={(value) => onChange(value, 'isHungry')}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: theme.colors.text}}>Is Happy</Text>
        <CustomSwitch 
          isOn={isHappy} 
          onChange={(value) => onChange(value, 'isHappy')}
        />
      </View>


      <Text style={{...styles.switchText, color: theme.colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  }
})
