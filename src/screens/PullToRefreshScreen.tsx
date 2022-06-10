import React, { useContext } from 'react'
import { RefreshControl, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();
    const { theme } = useContext(ThemeContext);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            setData('Hola mundo!');
        }, 1500);
    }

  return (
    <ScrollView
        refreshControl={
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={50}
                colors={[theme.colors.primary]}
                tintColor={theme.colors.primary}
            />
        }
    >
        <View style={{ marginHorizontal: 20 }}>

        <HeaderTitle title="Pull To Refresh" />

        <Text style={{color: theme.colors.text}}>{data}</Text>

        </View>
    </ScrollView>
  )
}
