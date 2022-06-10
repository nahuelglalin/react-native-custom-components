import React, { useContext } from "react"
import { View } from "react-native"
import { ThemeContext } from "../context/theme/ThemeContext";


export const ItemSeparator = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <View 
            style={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.text,
                marginVertical: 5,
                opacity: 0.3
            }}
        />
    )
}