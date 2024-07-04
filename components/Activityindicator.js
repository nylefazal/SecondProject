import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const Activityindicator = () => {
    return (
        <View style={styles.main}>
            <Text>Hellow world</Text>
            
        </View>

    )
}

const styles = StyleSheet.create(
    {
        main:
        {
            backgroundColor:'#000',
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        }
    }
)

export default Activityindicator;