import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import { useNavigation } from '@react-navigation/native';
import enf1 from '../assets/enf1.jpg'
import { Badge } from 'react-native-elements';
const ListConv = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={bc} style={styles.container}>
        <View >
            <View style={styles.header}>
                <TouchableOpacity 
                   onPress={()=> navigation.navigate("Home")}>
                   <FontAwesome5 name="arrow-left" color="white" size="sm"
                    m={2}
                      _light={{
                         color:"black"
                      }}
                      _dark={{
                          color:"gray.100.300"
                        }}
                                
                                
                    />
                </TouchableOpacity>
                <Text style={styles.HeaderText}>Convocations</Text>
                            
                <SafeAreaView >
                    <TouchableOpacity style={styles.bar}
                        onPress={()=> navigation.navigate("#")}>
                            <FontAwesome5 name="bars" size={24} color="white"/>
                    </TouchableOpacity>
                </SafeAreaView>
            </View> 

            <View style={styles.middle}>
                <Text style={styles.text}> Convocations réçus</Text>
            </View> 
            <View style={styles.middle}>
                <TouchableOpacity onPress={()=> navigation.navigate("ListTask")}>
                        <View style={styles.cardContainer}>
                            
                            <View style={styles.info}>
                              
                                <Text >Titre : hffcg</Text>
                                <Text >Raison :  : yhbj bujnk</Text>
                                <Text style={styles.day}>Envoyé le :   <Badge value=" 26-04-2022" status="success" /> 

                                </Text>

                            </View>

                        </View>
                </TouchableOpacity>

             </View>
             
            
        </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <ListConv/>
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
        flex:1,
        marginTop:-3
    },
    HeaderText:{
        color:'#fff',
        fontWeight:'700',
        textAlign:'center',
     },
     text:{
         fontWeight:'550',
         fontSize:23,
         color:'#2D9C39',
         marginTop:25
     },
     cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#fff',
        height:90,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
    },
    img:{
        height:80,
        width:80,
        borderRadius:50,
        opacity:1,
        margin:25

    },
    info:{
        flexWrap:'wrap',
        margin:10,
        fontSize:18,
        
       
    },
    nom:{
        fontSize:15,
        fontWeight:'650'
    },
    date:{
        marginLeft: 218,
    }

   
    

})