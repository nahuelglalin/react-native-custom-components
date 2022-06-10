import React, { useContext } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const HeaderTitle = ({title}: Props) => {

    const insets = useSafeAreaInsets();
    const { theme } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: insets.top + 20, marginBottom: 20 }}>
            <Text 
                style={{
                    ...styles.title,
                    color: theme.colors.text
                }}
            >
                {title}
            </Text>
        </View>
    )
}

