import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Responsive = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'yellow', }}></View>
                    <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                    <View style={{ flex: 1, backgroundColor: 'white' }}></View>
                </View>
                <View style={{ backgroundColor: 'yellow', flex: 1 }}>
                </View>
                <View style={{ backgroundColor: 'green', flex: 1 }}>
                </View>
                <View style={{ backgroundColor: '#fff', flex: 1 }}>

                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create(
    {

    }
)
export default Responsive;