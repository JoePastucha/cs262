import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../shared/header';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';


const Stack = createStackNavigator();
export default function HomeStack( {navigation} ) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:'#ddd'}
        }}>
            <Stack.Screen
                name="GameZone"
                component={Home}
                options={{
                    title: 'HabitBuddy',
                    headerTitleAlign: {
                        textAlign: 'center'
                    },
                    headerLeft: () =>  <Header navigation={navigation}/>
                }}
            />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{
                    title: 'Review Details',
                    headerTitleAlign: {
                        textAlign: 'center'
                    },
                }}
            />
        </Stack.Navigator>
    );
};
