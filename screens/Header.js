import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'


const Header = (props) => {
console.log(props);
    return(
       <View style={styles.header}>
                <TouchableOpacity
                    onPress={props.pressHandler } >
                      <FontAwesome5 name="arrow-left" color="white" size={24}
                      m={2}
                     _light={{
                        color:"black"
                        }}
                        _dark={{
                          color:"gray.100.300"
                        }}
                                
                                
                    />
                 </TouchableOpacity>
           <Text style={styles.headerText}>{props.title}</Text>
           <SafeAreaView>
                <TouchableOpacity style={styles.bar}
                    onPress={()=> navigation.navigate("#")}>
                    <FontAwesome5 name="bars" size={24} color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
       </View>
    )
}

export default Header

const styles = StyleSheet.create({
    
        header:{

            width: 375,
            height:65,
            padding:15,
            alignItems:'center',
          flexDirection:'row',
          justifyContent:'space-between',
            backgroundColor: '#17a2b8',
        },
        headerText:{
            color:'#fff',
            fontWeight:'bold',
            textAlign:'center',
         },
    bar:{
        alignItems:'flex-end',
        margin:5,
        flex:1,
        marginTop:-3
    },
})




