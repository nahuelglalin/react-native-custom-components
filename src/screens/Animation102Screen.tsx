import React, { useContext, useRef } from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {
  
  const { theme } = useContext(ThemeContext);
  const pan = useRef(new Animated.ValueXY()).current;


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x, // x,y are Animated.Value
        dy: pan.y,
      }
    ],
    {useNativeDriver: false}),
    //onPanResponderRelease = es cdo la persona suelta la animacion
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: { x: 0, y: 0 }, useNativeDriver: false} // Back to zero
      ).start();
    },
  });


  return (
    <View style={styles.container}>

      <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(), {...styles.purpleBox, backgroundColor: theme.colors.primary}]}
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
