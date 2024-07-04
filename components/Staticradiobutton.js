import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Staticradiobutton = () => {
    const [show, setshow] = useState(2)
    return (
        <View style={styles.main}>
            <Text style={styles.textstyle}>STATIC RADIO BUTTON</Text>
            <TouchableOpacity onPress={() => setshow(1)}>
                <View style={styles.radiowrapper}>
                    <View style={styles.radio}>
                        {
                            show == 1 ?
                                <View style={styles.radiobg}></View>
                                : null
                        }
                    </View>
                    <Text style={styles.radiotext}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshow(2)}>
                <View style={styles.radiowrapper}>
                    <View style={styles.radio}>
                        {
                            show == 2 ?
                                <View style={styles.radiobg}></View>
                                : null
                        }
                    </View>
                    <Text style={styles.radiotext}>Radio 2</Text>
                </View>
            </TouchableOpacity>
        </View>



    )
}

const styles = StyleSheet.create(
    {
        main: {
            backgroundColor: 'skyblue',
            flex: 1,
            justifyContent: "center",
            alignItems: 'center'
        },
        radiotext: {
            fontSize: 23,
            color: 'black'

        },
        radio: {
            height: 22,
            width: 22,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 20,
            margin: 10
        },
        radiowrapper: {
            flexDirection: 'row',
            alignItems: 'center',

        },
        radiobg: {
            backgroundColor: '#fff',
            height: 13,
            width: 13,
            borderRadius: 10,
            margin: 2.5
        },
        textstyle: {
            fontSize: 23,
            color: 'black',
            margin: 9,
            fontWeight: 'bold',
            letterSpacing: 2
        }
    }
)
export default Staticradiobutton;