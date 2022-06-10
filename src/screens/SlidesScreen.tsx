import React, { useContext, useState } from 'react'
import { Animated, Button, Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/theme/ThemeContext';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = () => {


    const { theme } = useContext(ThemeContext);
    const [isVisible, setIsVisible] = useState(false);
    const [itemActual, setItemActual] = useState(0);
    const { opacity, fadeIn } = useAnimation();

    const navigation = useNavigation();

    const renderItem = (item: Slide) => {
        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: 5,
                    padding: 40,
                    justifyContent: 'center'
                }}
            >

                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />

                <Text style={{...styles.title, color: theme.colors.primary}} >{item.title}</Text>
                <Text style={{...styles.subtitle, color: theme.colors.text}} >{item.desc}</Text>
            </View>

        )
    }

    return (
        <SafeAreaView
            style={{ flex: 1, paddingTop: 50 }}
        >

            <Carousel
                //ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(index) => {
                    setItemActual(index);

                    if (index == 2){
                        fadeIn();
                        setIsVisible(true);
                    } 
                    
                }}
            />

            <View
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginHorizontal: 20
                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={itemActual}
                    dotStyle={{
                        height: 10,
                        width: 10,
                        borderRadius: 10,
                        backgroundColor: theme.colors.primary
                    }}
                />

                {
                    (isVisible == true) &&(
                    
                        <Animated.View
                            style={{
                                opacity: opacity,
                            }}
                        >

                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{
                                    flexDirection: 'row',
                                    backgroundColor: theme.colors.primary,
                                    width: 140,
                                    height: 50,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => { navigation.navigate('HomeScreen' as any)}}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: 'white',
                                    }}
                                >Ingresar</Text>
                                <Icon
                                    name="chevron-forward-outline"
                                    color="#fff"
                                    size={28}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    
                    )

                }
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subtitle: {
        fontSize: 16
    }
})
