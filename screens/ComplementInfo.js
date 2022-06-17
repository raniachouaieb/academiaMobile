import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import {Input, Icon, NativeBaseProvider, Button, InputRightAddon, ScrollView} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
const ComplementInfo = () => {
    const navigation = useNavigation();
   const [name, setName] = useState('fddd')
    return(
        <ScrollView>
            <ImageBackground source={bc} style={styles.container} >
                <View>
                        <View >
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
                            <Text style={styles.text}>Complement Information</Text>
                            
                            <SafeAreaView >
                                <TouchableOpacity style={styles.bar}
                                onPress={()=> navigation.navigate("#")}>
                                    <FontAwesome5 name="bars" size={24} color="white"/>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </View> 
                            <View style={styles.middle}>
                                <Text style={styles.title}>Information Père</Text>
                            </View> 

                            <View style={styles.cardContainer}>
                                   <View >
                                        <TextInput style={styles.input}
                                        
                                        onChangeText={(val) => setName(val)}
                                        />
                                         <TextInput style={styles.input}
                                        value='ikj,ik'
                                        />
                                        <TextInput style={styles.input}
                                        value='tfgh'
                                        />
                                         <TextInput style={styles.input}
                                        value='23 548 745'
                                        keyboardType='numeric'

                                        />
                                    </View>
                            </View> 
                             <View style={styles.middle}>
                                <Text style={styles.title}>Information Mère</Text>
                            </View> 
    
                            <View style={styles.cardContainer}>
                                   <View >
                                        <TextInput style={styles.input}
                                        value='fddf'
                                        />
                                         <TextInput style={styles.input}
                                        value='ikj,ik'
                                        />
                                        <TextInput style={styles.input}
                                        value='tfgh'
                                        />
                                         <TextInput style={styles.input}
                                        value='25 125 458'
                                        keyboardType='numeric'

                                        />
                                    </View>
                            </View>  

                            <View style={styles.middle}>
                                <Text style={styles.title}>Contact</Text>
                            </View> 

                            <View style={styles.cardContainer}>
                                   <View >
                                        <TextInput style={styles.input}
                                        value='jujhk kk'
                                        />
                                         <TextInput style={styles.input}
                                        value='2'
                                        />
                                        <TextInput style={styles.input}
                                        value='huh@gmail.com'
                                        keyboardType='email-address'
                                        />
                                         

                                        
                                    </View>
                            </View>  
                            {/*Button*/}
                            <View style={styles.buttonStyle}>
                                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
                                    Modifier
                                </Button>
                            </View>

                            <View style={styles.middle}>
                                <Text style={styles.title}>Enfants</Text>
                            </View>
                            <View style={styles.cardContainerEnf}>
                                   <View >
                                        <TextInput style={styles.input}
                                        value='ines '
                                        />
                                         <TextInput style={styles.input}
                                        value='chaouch'
                                        />
                                        
                                         

                                        
                                    </View>
                            </View> 
                            {/*Button*/}
                            <View style={styles.buttonStyle}>
                                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
                                    Modifier
                                </Button>
                            </View>

                            <View style={styles.cardContainerEnf}>
                                   <View >
                                        <TextInput style={styles.input}
                                        value='ahmed '
                                        />
                                         <TextInput style={styles.input}
                                        value='chaouch'
                                        />
                                                         
                                    </View>
                            </View> 
                            {/*Button*/}
                            <View style={styles.buttonStyle}>
                                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
                                    Modifier
                                </Button>
                            </View>
                        </View>

            </ImageBackground>
        </ScrollView>

       
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <ComplementInfo/>
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
         marginBottom:15,
        backgroundColor:'#fff',
        height:200,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:2, height:4},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
        borderColor:'#000'
    },
    cardContainerEnf:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#fff',
        height:130,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:2, height:4},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
        borderColor:'#000'
    },
   
    
  
    camera:{
        position:'absolute',
        right: 27 ,
        bottom:29
       
    },
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelButton: {
        padding: 10,
        marginTop:20,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 5,
        width:289, marginBottom:21,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
      bottomSheetTitle:{
        
            fontSize: 22,
            height: 25,
          
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20,
        color:'#2D9C39',
        marginTop:25,
      },
      box:{
        width: deviceWidth - 20,
        marginTop:70,
        margin:8,
        height:165,
        padding:10,
        shadowOffset: {width:-2, height:4},
        shadowRadius: 17,
        borderRadius:-1,
        shadowOpacity: 0.5,
        /*backgroundColor:'#fff'*/
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        borderColor:'#777',
        padding:7,
        margin:10,
        width:300,
        marginTop:7

    },
    buttonmodifenf:{
        backgroundColor:'#39D693'
    }

})