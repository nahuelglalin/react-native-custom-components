import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = ( {isOn, onChange}: Props ) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const { theme } = useContext(ThemeContext);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled); 
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: "#D9D9DD", true: theme.colors.primary }}
            thumbColor={(Platform.OS === 'android') ? theme.colors.primary : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
