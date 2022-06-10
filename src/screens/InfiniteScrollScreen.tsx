import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle'

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0,1,2,3,4,5]);

    //funcion que va a agregarle nuevos numeros al array de numeros
    const loadMore = () => {
        let newArray: number[] = [];
        for(let i = 0; i < 5; i++){
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 500);

    }

    const renderItem = (item: number) => {
        
        return (
            <Image 
                source={{uri: `https://picsum.photos/id/${item}/500/400`}}
                style={{flex: 1, width: '100%', height: 400}}
            />
        )
    }

  return (
    <View style={{flex: 1}}>
    
        <FlatList 
            data={ numbers }
            keyExtractor={ (item) => item.toString() }
            renderItem={ ({item}) => renderItem(item) }

            ListHeaderComponent={ () => <HeaderTitle title='Infinite Scroll' /> }

            onEndReached={ loadMore }//cuando estoy por llegar al final de la lista
            onEndReachedThreshold={0.5}//que ejecute el onEndReached en la posicion 0.5 antes de llegar al final del screen

            ListFooterComponent={ () => <ActivityIndicator color='#5856d6' size={30}  /> }
        />

    </View>
  )
}


const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150
    }
})