import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
const Loginform = () => {
    function LoginformMethod() {
        console.warn('Login Successfully')
    }
    function RecoverPasswordMethod() {
        console.warn('Forgotten Password')
    }
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.bg}>
                <View style={styles.alignnment}>
                    <Text style={styles.textstyle}>
                        Login Form
                    </Text>
                    <View style={styles.textview}>
                        <TextInput style={styles.textinputstyle} placeholder="Enter your email" placeholderTextColor={'black'} />
                        <TextInput style={styles.textinputstyle} placeholder="Enter your password" placeholderTextColor={'black'} />
                    </View>
                </View>
                <View style={styles.lgbtn}>
                    <Button title="Login" onPress={() => LoginformMethod()} />
                </View>
                <Text style={styles.textforgot}>Forgot passsword?</Text>
                <View style={styles.recbtn}>
                    <Button title="Recover Password" onPress={() => RecoverPasswordMethod()} />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        main: { flex: 1 },
        bg: { flex: 1, backgroundColor: '#fff' },
        alignnment: { alignItems: 'center', marginTop: 200 },
        textstyle: { color: 'black', fontSize: 33, fontWeight: 'bold', letterSpacing: 4 },
        textview: { marginTop: 20 },
        textinputstyle: { fontSize: 19, fontWeight: '300', height: 50, width: 340, paddingLeft: 20, borderWidth: 1, marginBottom: 4, borderColor: 'lightgrey' },
        lgbtn: { marginRight: 20, marginLeft: 20, marginTop: 20, marginBottom: 10 },
        recbtn: { marginRight: 20, marginLeft: 20 },
        textforgot: { textAlign: 'center', color: 'black', fontWeight: '300', marginBottom: 10 }
    }
)
export default Loginform;