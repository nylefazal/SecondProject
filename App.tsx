import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import Responsive from "./components/Responsive";
import Buttoncomp from "./components/Buttoncomp";
import Staticradiobutton from "./components/Staticradiobutton";
import Dynamicradiobutton from "./components/Dynamicradiobutton";
import Activityindicator from "./components/Activityindicator";
import Moralinreact from "./components/Moralinreact";
import Flatlistcomp from "./components/Flatlistcomp";
import Loginform from "./components/Loginform";
import Pressablecomp from "./components/Pressablecomp";
const App = () => {
  return (
  <Flatlistcomp/>
  )
}



const styles = StyleSheet.create(
  {
    spacestyle: {
      backgroundColor: 'green',
      marginBottom: 10,
      textAlign: 'center',
      fontSize: 23,
      color: 'white',
      padding: 10
    },
    classcontainer: {
      fontSize: 33,
      color: 'green',
      padding: 10,
      textAlign: 'center',
      marginTop: 130,
      paddingBottom: 20,
      letterSpacing: 3
    },
    input: {
      fontSize: 17,
      backgroundColor: 'skyblue',
      textAlign: 'center',
      margin: 20,
    }
  }
)

export default App;