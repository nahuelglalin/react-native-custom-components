import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const {theme} = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={ () => navigation.navigate(menuItem.component as any) }
        >
            <View style={styles.container}>
                <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />
                <Text 
                style={{
                    ...styles.itemText,
                    color: theme.colors.text
                }}
                >
                    {menuItem.name}
                </Text>
                <Icon style={styles.arrow} name="chevron-forward-outline" color={theme.colors.primary} size={23} />
            </View>
        </TouchableOpacity>
    )
}

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    },
    arrow: {
        marginLeft: 'auto'
    }
})