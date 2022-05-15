import React from 'react'
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import bg from '../assets/bg.jpg'
import parent from '../assets/parent.jpg'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawer = (props)=>{
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: '#8200d6'}}>
                <ImageBackground source={bg} style={{padding:20}}>
                    <Image
                        source={parent}
                        style={styles.img}/>
                    <Text style={styles.name}> Samir Chaouch</Text>
                </ImageBackground>
                <View style={styles.itemList}>
                    <DrawerItemList {...props}/>
                </View>

        </DrawerContentScrollView>
            <View>
                <Text> Custom </Text>
            </View>
        </View>

    )
}
export default CustomDrawer


const styles = StyleSheet.create({
    img:{
        height:80,
        width:80,
        borderRadius:40,
        marginBottom:10
    },
    name:{
        color:'#fff',
        fontSize:18,
        fontWeight:'700'
    },
    itemList:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:10
    }
})