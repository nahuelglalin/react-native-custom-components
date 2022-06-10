import React, { useContext } from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme'


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", "Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", ]
    }
];

export const CustomSectionList = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>

        <SectionList 
            sections={ casas }//indico que voy a trabajar sobre el array de casas
            keyExtractor={ (item, index) => item + index }//le pongo un key a cada uno de los items de la data
            
            ListHeaderComponent={() => <HeaderTitle title="Section List" />}//seteo el titulo 
            ListFooterComponent={() => <HeaderTitle title={"Total de casas: " + casas.length} />}//Seteo el titulo del footer
            
            renderItem={({ item }) => <Text style={{color: theme.colors.text}}>{item}</Text>}//renderizo en un text cada uno de los items (las data)
            stickySectionHeadersEnabled={true}//le digo que cada seccion tiene un header, y ese header es sticky
            
            renderSectionHeader={ ({section}) => (//renderizo los items del array de casas
                <View style={{backgroundColor: theme.colors.background}}>
                    <HeaderTitle title={section.casa} />
                </View>
            )}

            renderSectionFooter={({section}) => (//renderizo el footer de cada seccion
                <View style={{backgroundColor: theme.colors.background}}>
                    <HeaderTitle title={"Total de personajes: " + section.data.length} />
                </View>
            )}

            SectionSeparatorComponent={() => <ItemSeparator />}//le digo que cada section tiene un separador

            showsVerticalScrollIndicator={false}//le digo que no muestre el scroll en vertical
        />

    </View>
  )
}
