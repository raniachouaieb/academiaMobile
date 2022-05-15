import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import { useNavigation } from '@react-navigation/native';
import enf1 from '../assets/enf1.jpg'
import { Badge } from 'react-native-elements';
const Info = () => {
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
                <Text style={styles.HeaderText}>Informations</Text>
                            
                <SafeAreaView >
                    <TouchableOpacity style={styles.bar}
                        onPress={()=> navigation.navigate("#")}>
                            <FontAwesome5 name="bars" size={24} color="white"/>
                    </TouchableOpacity>
                </SafeAreaView>
            </View> 

            <View style={styles.middle}>
                <Text style={styles.text}>Mon/ Mes enfant(s)</Text>
            </View> 
            <View style={styles.middle}>
                <TouchableOpacity onPress={()=> navigation.navigate('ListInfo')}>
                        <View style={styles.cardContainer}>
                            
                            <Image source={enf1} style={styles.img}/>
                            <View style={styles.info}>
                            <Text style={styles.nom} >salma chaouch</Text>
                            <Text > Niveau : 1ere année</Text>
                            <Text > Classe : Farachet</Text>
                            <Text style={styles.day}>Nombre information réçu: 
                            <Badge value="10" status="success" /> 
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
            <Info/>
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
        backgroundColor:'#E1E8E5',
        height:150,
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
        flexDirection:'row'
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
        justifyContent:"center",
    },
    nom:{
        fontSize:15,
        fontWeight:'650'
    }

   
    

})