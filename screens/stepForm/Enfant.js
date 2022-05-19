import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {  NativeBaseProvider } from 'native-base'
const Enfant = ()=>{
    return (
        <View>
            <Text>enfant</Text>
        </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Enfant/>
        </NativeBaseProvider>

    )
}