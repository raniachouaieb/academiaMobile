import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import {Input, Icon, NativeBaseProvider, Button, InputRightAddon, ScrollView} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg'
import parent from '../assets/parent.jpg'
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { BottomSheet } from 'react-native-btr';
import avatar from '../assets/avatr.jpg';
import enf2 from '../assets/enf2.jpg';
import 'react-native-gesture-handler'
import GlobalStyles from "../assets/GlobalStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
    const navigation = useNavigation();
    const URI = 'http://192.168.1.23:8000';
    const [data,setData]=useState();

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            const token = await AsyncStorage.getItem('userToken');
            const id = await AsyncStorage.getItem('id');
            console.log('-------id----------',id);

            fetch(URI + '/api/user/profile/'+id,{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer '+token,
                    //   'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMjM6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTgyMTU4MCwiZXhwIjoxNjU1ODI1MTgwLCJuYmYiOjE2NTU4MjE1ODAsImp0aSI6ImdxbUtrM2ZRWVpnRzg0YWoiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.JgT3X1sKpA-XJnz1wMhqMMhvTTs9NC7H7Blaz8SD3ZE',

                },


            })
                .then((response) => response.json())
                .then((json) => {
                    console.log("--------------json-------------", json)
                    setData(json.data)
                    setImage(json.data.image_profile);
                })
                .catch((error) => console.error(error))

        }

        asyncFetchDailyData();
    }, []);
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
        <ScrollView>
            <ImageBackground source={bc} style={styles.container} >
                <View>


                        <View style={styles.middle}>
                            <View style={styles.cardContainer}>
                              <View style={styles.middle}>
                                    <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                                        {/*<Image source={parent} style={styles.img}/>*/}
                                       <Image source={image===null?parent:{uri:'http://192.168.1.23:8000/assets/uploads/parents/6gQMGbnf6PuGZqNsZfYMXKQNyyDv38aKXRiDEeBF.jpg'}} style={styles.img}/>
                                        <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                    </TouchableOpacity>


                                          <View style={GlobalStyles.Cardename}>
                                            <Text  style={styles.nom}>  {data.nomPere}  {data.prenomPere}</Text>
                                            <Text ><FontAwesome5 name="envelope" size={18} color="black"/>  {data.email} </Text>
                                            <Text><FontAwesome5 name="phone" size={18} color="black"/>    {data.telPere}</Text>
                                          </View>

                                  <View>

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
        </ScrollView>

       
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
        height:350,
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
        backgroundColor:'#fff'
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

})