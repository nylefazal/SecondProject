import React, { useState } from "react";
import { Button, StyleSheet, Text , View } from "react-native";



const PropsnState = ()=>{
    const[count,setcount] = useState(0);
    return(
        <View>
            <Text style={styles.textstyle}>Props and state </Text>
            <Button title="Count me " onPress={()=>setcount(count+1)} />
            <Newpropnstate item={{count,setcount}} />
        </View>
    )

}
const Newpropnstate = (props) =>{
    return(
        <View>
            <Text style={styles.textstyle}>Count {props.item.count}</Text>
            <Button title="Clear" onPress={()=>props.item.setcount(0)}/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        textstyle:{
            color:'black',
            fontSize:23
        }
    }
)

export default PropsnState;