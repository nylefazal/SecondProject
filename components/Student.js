import React from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";


class Student extends React.Component {
    constructor(){
      super();
      this.state={
        name:'Nylee'
      }
    }
    render(){
      return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <SafeAreaView>
            <View >
              <Text style={styles.container}>{this.state.name}</Text>
              <Text style={styles.container}>Student Component {this.props.name}</Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      )
    }
  }

const styles = StyleSheet.create(
    {
        container:{
            fontSize: 23,
            color: 'red',
            paddingTop: 30,
            textAlign:'center',
        }
    }
)
   
export default Student;