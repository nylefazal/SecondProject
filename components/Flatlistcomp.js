import React, { useState } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const Flatlistcomp = () => {
    const user = [
        {
            id: 1,
            name: 'Nyle'
        },
        {
            id: 2,
            name: 'Fazal'
        },
        {
            id: 3,
            name: 'Aqil'
        },
        {
            id: 4,
            name: 'Javed'
        }
    ]

    function Press(){
        console.warn('You press')
    }
    const [show, setshow] = useState(1)
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.Safeareastyle}>
                <View style={styles.Viewstyle}>
                    <Text style={styles.Textstyle}>Flat List In React Native</Text>
                   
                    <View style={styles.listitemview}>
                        <FlatList
                            data={user}
                            renderItem={({ item }) =>
                                <View >
                                    <Text style={styles.textliststyle}>{item.id} {item.name}</Text>
                                    
                                </View>
                            } />
                    </View>
                </View>
            </View>
           
        </SafeAreaView>

    )
}
const styles = StyleSheet.create(
    {
        Safeareastyle: {
            flex: 1,
            backgroundColor: 'grey'
        },
        Viewstyle: {
            justifyContent:'center',
            alignItems: 'center',
            flex: 1,
            marginTop: 200,
         
            padding:40

        },
        Textstyle: {
            fontSize: 23,
            color: '#000',
            letterSpacing: 2

        },
        container: {
            height: 90,
            width: 47,
            borderColor: '#000',
            borderRadius: 25,
            borderWidth: 2,
            marginTop: 10
        },
        circlestyle: {
            height: 90,
            width: 45,
            borderColor: '#000',
            borderRadius: 25,
            borderWidth: 2,
            backgroundColor: 'black',
            marginBottom: 19

        },
        circlewrapper: {
            flex: 1,
            flexDirection: 'row',
            

        },
        listitemview: {
            marginTop: 20,
            
        },
        textliststyle: {
            color: 'black',
            fontSize: 21,
            fontWeight: '300'
        }
    }
)

export default Flatlistcomp;