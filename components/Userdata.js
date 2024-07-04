import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default Userdata = (props)=>
    {
      const item = props.item;
      return(
        <View style={style.box}>
        <Text style={style.item}>{item.useId}</Text>
        <Text style={style.item}>{item.username}</Text>
        <Text style={style.item}>{item.email}</Text>
      </View>
  
      )
    }
  
  
  const style = StyleSheet.create(
    {
      item: {
        fontSize: 13,
        color: 'black',
        flex: 1,
        margin:5,
      },
      box: {
        flexDirection: 'row',
        borderWidth:2,
        borderColor:'blue',
        marginBottom:10,
        textAlign:'center',
        padding:10,
        backgroundColor:'#fff'
      },
      wrap: {
        height: 120,
        width: 102,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 23,
        textAlign: 'center',
        textAlignVertical: 'center',
        margin: 1,
        padding: 5
      },
      inputvalue: {
        color: 'black',
        fontSize: 17,
        borderWidth: 1,
        margin: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        textAlign: 'center'
  
      },
      textBox: {
        color: 'black',
        backgroundColor: 'pink',
        height: 100,
        width: 330,
        textAlign: 'center',
        paddingTop: 23,
        fontSize: 23,
        letterSpacing: 3,
        borderRadius: 40,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 7
  
      },
      background: {
        marginTop: 50,
        padding: 20,
  
      },
      container: {
        backgroundColor: 'lightgreen',
        height: 819,
        justifyContent: 'space-between'
      }
    }
  )
  
  
 