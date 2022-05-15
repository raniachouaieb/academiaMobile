import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg'
import parent from '../assets/parent.jpg'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { BottomSheet } from 'react-native-btr';
import avatar from '../assets/avatr.jpg';
import enf2 from '../assets/enf2.jpg';
import 'react-native-gesture-handler'

const Profile = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
    const [image, setImage] = useState(null);
     let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        /*console.log(pickerResult);*/
        setImage(pickerResult.uri);
      }
      let openCamera = async () => {
        let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchCameraAsync();
        /*console.log(pickerResult);*/
        setImage(pickerResult.uri);
      }
    return(
            <ImageBackground source={bc} style={styles.container} >
                <View>
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
                            <Text style={styles.text}>Profile</Text>
                            
                            <SafeAreaView >
                                <TouchableOpacity style={styles.bar}
                                onPress={()=> navigation.navigate("#")}>
                                    <FontAwesome5 name="bars" size={24} color="white"/>
                                </TouchableOpacity>
                            </SafeAreaView>
                        </View>  

                        <View style={styles.middle}>
                            <View style={styles.cardContainer}>
                              <View style={styles.middle}>
                                    <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                                        {/*<Image source={parent} style={styles.img}/>*/}
                                       <Image source={{uri: image==null?parent:image}} style={styles.img}/>
                                        <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                    </TouchableOpacity>

                                    <View style={styles.info}>
                                    
                                        <Text  style={styles.nom}><FontAwesome5 name="user" size={18} color="black"/>   samir ali</Text>
                                        <Text ><FontAwesome5 name="envelope" size={18} color="black"/>   samir@gmail.com</Text>
                                        <Text><FontAwesome5 name="phone" size={18} color="black"/>   25 214 214</Text>
                                        

                                    </View>
                                   
                                </View>

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
                        <View style={styles.middle}>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                    <View style={styles.middle}>
                                            <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                                                {/*<Image source={parent} style={styles.img}/>*/}
                                            <Image source={{uri: image==null?enf2:image}} style={styles.img}/>
                                                <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                            </TouchableOpacity>

                                            <View style={styles.info}>
                                            
                                                <Text  style={styles.nom}><FontAwesome5 name="user" size={18} color="black"/>   samir ali</Text>
                                            </View>
                                        
                                    </View>

                                </View>
                            </View>
                           
                        </View>
                         {/*Button*/}
                         <View style={styles.buttonStyle}>
                                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("#")}>
                                    Modifier
                                </Button>
                            </View>
                        <View style={styles.middle}>
                            <View style={styles.box}>
                                <View style={styles.inner}>
                                <View style={styles.middle}>
                                        <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                                            {/*<Image source={parent} style={styles.img}/>*/}
                                        <Image source={{uri: image==null?avatar:image}} style={styles.img}/>
                                            <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                        </TouchableOpacity>

                                        <View style={styles.info}>
                                        
                                            <Text  style={styles.nom}><FontAwesome5 name="user" size={18} color="black"/>   samir ali</Text>
                                        </View>
                                    
                                </View>

                                </View>
                            </View>
                        </View>

                        <BottomSheet
                            visible={visible}
                            //setting the visibility state of the bottom shee
                            onBackButtonPress={toggleBottomNavigationView}
                            //Toggling the visibility state on the click of the back botton
                            onBackdropPress={toggleBottomNavigationView}
                            //Toggling the visibility state on the clicking out side of the sheet
                            >
                            {/*Bottom Sheet inner View*/}
                            <View style={styles.bottomNavigationView}>
                            <View style={styles.panelHeader}/>
                            <View style={styles.panelHandle} />
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={styles.bottomSheetTitle}>
                                        Changer photo de profil
                                    </Text>
                                </View>
                                <View>
                                    <TouchableOpacity style={styles.panelButton} onPress={openImagePickerAsync}>
                                        <Text style={styles.panelButtonTitle}> Choisir photo</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.panelButton} onPress={openCamera}>
                                        <Text style={styles.panelButtonTitle}> Prendre photo</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </BottomSheet>
                       
             
                </View>
            </ImageBackground>

       
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Profile/>
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
        height:180,
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
        height:90,
        width:90,
        borderRadius:50,
        opacity:1,
        margin:25

    },
    info:{
        marginTop:-22,
        fontWeight:'590',
        fontSize: 15
    },
    nom:{
        textAlign:'center',
        fontWeight:'bold'
        
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

})