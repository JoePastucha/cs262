import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import Home from './screens/home'
import Navigator from './routes/homeStack'

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    if (fontsLoaded) {
        return (
            <NavigationContainer>
                <Navigator/>
            </NavigationContainer>
        );
    } else {
        return (
        <AppLoading
            startAsync = {getFonts}
            onFinish = {() => setFontsLoaded(true)}
        />
        )
    }
};