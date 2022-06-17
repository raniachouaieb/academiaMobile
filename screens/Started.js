import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, TouchableOpacity } from 'react-native';
import started2 from '../assets/started2.jpg';
import { useNavigation } from '@react-navigation/native';

function Started () {
    const navigation = useNavigation();

    return (
        <ImageBackground source={started2} style={styles.container}>
            
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                <Text style={styles.text}>Get started</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

export default Started

const styles = StyleSheet.create({
    container:{
        flex:1,
        justufyContent: 'center',
        alignItems: 'center',
    },
    text:{
        backgroundColor: '#00b894',
        fontSize:20,
        borderRadius: 10,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginTop:614,
        width:355,

        padding: 12 ,
        textAlign:'center',
        color: '#fff'
   
    }
})