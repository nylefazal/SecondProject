import React, { useState } from "react";
import { Button, Modal, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Moralinreact = () => {
    const [show,setshow]=useState(false)
    return (
        <View style={styles.main}>
            <Modal 
           transparent={true}
           animationType="slide"
           visible={show}
            >
                <View style={styles.centeredview}>
                    <View style={styles.modalview}>
                        <Text style={styles.textstyle}>Hello World I'm A Modal</Text>
                        <Button title="Closed Modal" onPress={()=>setshow(false)}/>
                    </View>
                </View>
            </Modal>
            <View style={styles.btnstyle}>
                <Button title="Open modal" onPress={()=>setshow(true)} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create(
    {
        main: {
            backgroundColor: 'skyblue',
            flex: 1
        },
        textstyle: {
            fontSize: 23,
            color: '#000',
            marginBottom:10
            
        },
        btnstyle: {
            flex:1,
            justifyContent: 'flex-end',
            marginBottom:10

        },
        centeredview:{
            flex:1,
            justifyContent:'center',
            alignItems:'center'
        },
        modalview:{
            backgroundColor:'#fff',
            padding:30,
            borderRadius:20,
            shadowColor:'white',
            elevation:100
        }
    }
)

export default Moralinreact;