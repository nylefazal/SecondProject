import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Dynamicradiobutton = () => {
    const [show, setshow] = useState(1)
    const skills = [
        {
            id: 1,
            name: 'React'
        },
        {
            id: 2,
            name: 'SQL'
        },
        {
            id: 3,
            name: 'pHp'
        },
        {
            id: 4,
            name: 'C++'
        },
        {
            id: 5,
            name: 'C#'
        }
    ]
    return (
        <View style={styles.main}>
            <Text style={styles.textstyle}>DYNAMIC RADIO BUTTON</Text>
            {
                skills.map((item, index) =>
                    <TouchableOpacity
                        key={index}
                        onPress={() => setshow(item.id)}>
                        <View style={styles.radiowrapper}>
                            <View style={styles.radio}>
                                {
                                    show == item.id ?
                                        <View style={styles.radiobg}></View>
                                        : null
                                }
                            </View>
                            <Text style={styles.radiotext}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }

        </View>

    )
}


const styles = StyleSheet.create(
    {
        main: {
            backgroundColor: 'lightgrey',
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
            backgroundColor: '#000',
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

export default Dynamicradiobutton;