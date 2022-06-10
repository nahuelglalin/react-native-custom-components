import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { styles } from '../theme/appTheme';
import { menuItems } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


export const HomeScreen = () => {

    
    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                ListHeaderComponent={ <HeaderTitle title="Opciones del Menu" />}
                ItemSeparatorComponent={ () => <ItemSeparator /> }
            />

        </View>
    )
}
