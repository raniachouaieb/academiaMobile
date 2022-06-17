import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions,TextInput, ImageBackground, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg'
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';
const Contact = () => {
    const navigation = useNavigation();
    
    return(
            <ImageBackground source={bc} style={styles.container} >
                <View>

                        <View style={styles.middle}>
                            <Image style={styles.img}
                            source={logo}/> 
                            </View>

                        <View style={styles.middle}>
                            <View style={styles.cardContainer}>
                                    <View style={styles.info}>
                                    
                                        <Text  style={styles.nom}><FontAwesome5 name="location" size={18} color="black"/>  teboulba, monastir</Text>
                                        <Text ><FontAwesome5 name="timer" size={18} color="black"/>   08:00 jusqu'à 17:00 </Text>
                                        <Text><FontAwesome5 name="phone" size={18} color="black"/>   73 214 214</Text>
                                        <Text><FontAwesome5 name="phone" size={18} color="black"/>   www.academia.com</Text>
                                        <Text><FontAwesome5 name="envelope" size={18} color="black"/>   academia@gmail.com</Text>

                                    </View>
                            
                            </View>

                        </View> 

                        <View style={styles.middle}>
                            <TextInput style={styles.input}
                             variant= "outline"
                             multiline= {true}
                             
                             numberOfLines={4}
                             placeholder="Ecrivez votre message"

                            
                            />
                        </View> 
                        {/*Button*/}
                         <View style={styles.buttonStyle}>
                            <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
                                Envoyer
                            </Button>
                        </View>

                        
             
                </View>
            </ImageBackground>

       
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Contact/>
        </NativeBaseProvider>

    )
}
const deviceWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
   
    middle:{
        alignItems:'center',
        justifyContent:'center',
    },
   
    header:{
        flex: 1,
        width: 360,
        height:20,
        padding:15,
      flexDirection:'row',
      justifyContent:'space-between',
        backgroundColor: '#17a2b8',
    },
    bar:{
        alignItems:'flex-end',
        margin:5,
        flex:1   ,
        marginTop:-3   
        
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
     },
     cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#fff',
        height:140,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:2, height:4},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
        borderColor:'#000'
    },
    img:{
        marginTop:100,
        width:100,
        height:100
    },
    info:{
        marginTop:18,
        margin:28
    },
  
    
  
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    
     
      title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'#2D9C39',
        marginTop:25,
      },
      input:{
        borderWidth:1,
        borderColor:'#777',
        padding:7,
        margin:10,
        width:300,
        marginTop:7,
        backgroundColor:'#fff'

    },
  

})