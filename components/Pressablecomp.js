import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Pressable } from 'react-native';

const Pressablecomp = () => {
    return (
        
        <SafeAreaView style={style.safeareawstyle}>
            <View style={style.viewstyle}>
                <Text style={style.stylepressable}>Press Able Button</Text>
                <Pressable
                onPress={()=>console.warn('normal press')}
                onLongPress={()=>console.warn('Long press')}
                onPressIn={()=>console.warn('Onpress in')}
                onPressOut={()=>console.warn('On Press Out')}
                >
                    <Text style={style.textstyle}>
                        Pressable
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create(
    {
        safeareawstyle: { flex: 1 },
        viewstyle: {
            flex: 1, backgroundColor: 'lightblue',
            justifyContent:'center'
        },
        textstyle: {
            color: "#fff",
            textAlign:'center',
            backgroundColor:'blue',
            fontSize:23,
            margin:15,
            padding:10,
            borderRadius:15,
            fontWeight:'800'
            
        },
        stylepressable:{
            color:'#000',
            textAlign:'center',
            fontSize:23,
            letterSpacing:3,
            
        }
    }
)

export default Pressablecomp;