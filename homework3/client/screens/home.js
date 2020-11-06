import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

//gather data from database
    useEffect(() => {
        fetch('https://evening-caverns-48542.herokuapp.com/games')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={globalStyles.container}>
            <FlatList data={data}
                    //  keyExtractor={({ id }, index) => id}
                      renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>Game: { item.gameid },Player: { item.name }, Score: { item.score }</Text>
                    </Card>
                </TouchableOpacity>
            )} />
        </View>
    );
}
