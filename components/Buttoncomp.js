import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";


const Buttoncomp = () => {
    const [count,setcount]=useState(0);
    return (
        <SafeAreaView style={styles.Safearea}>
            <ScrollView>
                <Text style={styles.Textstyle}>
                    Touchable TouchableHighlight 
                </Text>
                <TouchableHighlight style={{marginTop:40}}  onPress={()=>setcount(count+1)} underlayColor={'lightblue'}>
                    <Text style={styles.Buttonstyle}>Button</Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>setcount(count+1)}  underlayColor={'pink'}>
                    <Text style={[styles.Buttonstyle,styles.Sucessstyle]}>Sucess</Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>setcount(count+1)}  underlayColor={'lightgreen'}>
                    <Text style={[styles.Buttonstyle,styles.Primestyle]}>Prime</Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>setcount(count+1)}  underlayColor={'blue'}>
                    <Text style={[styles.Buttonstyle,styles.Warnestyle]}>Warning</Text>
                </TouchableHighlight>
                <TouchableHighlight  onPress={()=>setcount(count+1)}  underlayColor={'red'}>
                    <Text style={[styles.Buttonstyle,styles.Errorestyle]}>Error</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>setcount(0)}  underlayColor={'orange'}>
                    <Text style={[styles.Buttonstyle,styles.Clearstyle]}>Clear</Text>
                </TouchableHighlight>
                <View style={styles.Viewstyle}>
                    <Text style={styles.Textstylecount}>Your Counts are {count}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create(
    {
        Textstyle:{
            fontSize:33,
            color:'black',
            textAlign:'center',
            marginTop:100,
            fontWeight:'bold',
            letterSpacing:2
        },
        Safearea: {
            backgroundColor: 'skyblue',
            flex: 1,
        },
        Buttonstyle:{
            fontSize:23,
            color:'white',
            fontWeight:'bold',
            backgroundColor:'lightblue',
            textAlign:'center',
            margin:10,
            padding:10,
            borderRadius:10,
            shadowColor:'blue',
            elevation:10,
            shadowOpacity:10
        },
        Sucessstyle:{
            backgroundColor:'pink',
            shadowColor:'red'
        },
        Primestyle:{
            backgroundColor:'lightgreen',
            shadowColor:'green'
        },
        Warnestyle:{
            backgroundColor:'blue',
            shadowColor:'lightblue',
            shadowOpacity:15
        },
        Errorestyle:{
            backgroundColor:'red',
            shadowColor:'black'
        },
        Viewstyle:{
            margin:10,
            marginTop:50,
            borderRadius:20
        },
        Textstylecount:{
            fontSize:27,
            textAlign:"center",
            color:"black",
            letterSpacing:10
        },
        Clearstyle:{
            backgroundColor:'orange',
            shadowColor:'yellow'
        }
    }
)

export default Buttoncomp;