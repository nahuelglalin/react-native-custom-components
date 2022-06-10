import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Animated, Button, Easing } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  //Custom Hook para hacer una animacion
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} = useAnimation();
  const { theme } = useContext(ThemeContext);

  return (
    <View style={styles.container}>

      <Animated.View
        style={{
          ...styles.purpleBox,
          backgroundColor: theme.colors.primary,
          opacity: opacity,
          transform: [{
            translateY: position
          }]
        }}
      />

      <Button 
        title='Fade In'
        onPress={ () => {
          fadeIn();
          startMovingPosition();
        }}
      />

      <Button 
        title='Fade Out'
        onPress={ fadeOut }
      />

    </View>
  )
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150
  }
})
