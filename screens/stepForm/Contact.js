import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {  NativeBaseProvider } from 'native-base'
const Contact = ()=>{
    return (
        <View>
            <Text>contact</Text>
        </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Contact/>
        </NativeBaseProvider>

    )
}