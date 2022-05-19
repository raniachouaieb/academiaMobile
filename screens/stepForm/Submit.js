import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {  NativeBaseProvider } from 'native-base'
const Submit = ()=>{
    return (
        <View>
            <Text>submit</Text>
        </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Submit/>
        </NativeBaseProvider>

    )
}