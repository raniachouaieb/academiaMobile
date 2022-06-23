import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    FlatList
} from 'react-native'
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
    const [nomPere,setnomPere]= useState();
    const [prenomPere , setprenomPere]=useState();
    const [telPere , settelPere]=useState();
    const [email,setemail]=useState();
    const [kids, setkids]=useState();
    const [isloading, setisloading]=useState(false);
    const [kidspicture, setkidspicture]=useState([]);
    const displayname =(text)=>{

        switch(text)
        {case '27':return '1ere'
        case '28': return '2eme'

        case '29':return '3eme'
        case '30':return '1ere'
        case '31':return '1ere'
        case '32':return '1ere'
    }}

    useEffect( async () => {
        setisloading(true);
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
                    setData(json.data);

                    setkids(json['0']);
                    let holder=[];
                    json['0'].forEach(element =>{
                        holder.push('http://192.168.1.23:8000/assets/'+element.image)

                    })
                    console.log('-----------holder------',holder);
                    setkidspicture(holder);

                    setprenomPere(json.data.prenomPere)
                    setnomPere(json.data.nomPere)
                    settelPere(json.data.telPere)
                    setemail(json.data.email)
                    setImage('http://192.168.1.23:8000/assets/'+json.data.image_profile);

                    setisloading(false)
                })
                .catch((error) => console.error(error))

        }

        asyncFetchDailyData();
    }, []);
    const [visible, setVisible] = useState(false);
    const createFormData = (uri) => {
        const fileName = uri.split('/').pop();
        const fileType = fileName.split('.').pop();
        const image_profile = new FormData();
        image_profile.append('image_profile', {
            uri,
            name: fileName,
            type: `image/${fileType}`
        });

        return image_profile;
    }
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
        console.log(pickerResult);
        setImage(pickerResult.uri);

      }
    let openImagePickerAsynckids = async (id) => {
         setisloading(true)
         console.log('id', id);
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }


        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log(pickerResult);
        let inter =kidspicture;
        inter[id]=pickerResult.uri;
        setkidspicture(inter);
        console.log('inside funcction-----', kidspicture);
        console.log('---------inter-------',inter);
        setisloading(false);
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
                {isloading?<Text>pleasewait senior</Text>:<View>


                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                            <View style={styles.middle}>
                                <TouchableOpacity onPress={toggleBottomNavigationView} style={styles.button}>
                                    {/*<Image source={parent} style={styles.img}/>*/}
                                    <Image
                                        source={image === null ? parent : {uri: image}}
                                        style={styles.img}/>
                                    <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                </TouchableOpacity>


                                <View style={GlobalStyles.Cardename}>
                                    <Text style={styles.nom}>{nomPere} {prenomPere} </Text>
                                    <Text><FontAwesome5 name="envelope" size={18} color="black"/>{email} </Text>
                                    <Text><FontAwesome5 name="phone" size={18} color="black"/> {telPere}</Text>
                                </View>
                            </View>
                                <FlatList data={kids}
                                          columnWrapperStyle={styles.row}
                                          numColumns={2}
                                          renderItem={({item,index})=>{
                                    console.log('---------------item------------',item)

                                    return(
                                            <View style={{
                                                marginBottom:10,
                                                paddingVertical:10,
                                                borderWidth:0.5,
                                                borderColor:'black'

                                            }}>

                                                <TouchableOpacity onPress={()=>openImagePickerAsynckids(index)} style={styles.button}>
                                                    {console.log('kidspic',kidspicture)}
                                                    <Image source={kidspicture[index] === null ? parent : {uri: kidspicture[index]}}
                                                           style={styles.img}/>
                                                    <FontAwesome5 name="camera" size={22} color="black" style={styles.camera}/>
                                                </TouchableOpacity>

                                                <View style={styles.info}>

                                                    <Text style={styles.nom}>{item.nomEleve} {item.prenomEleve} </Text>
                                                    <Text style={{color:'grey', textAlign:'center',}}>{displayname(item.niveau)}
                                                     </Text>
                                                </View>
                                            </View>
                                        )


                                }

                                }                keyExtractor={(item => item.id)}

                                />




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
                            <View style={styles.panelHandle}/>
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


                </View>}
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
    row: {
        flex: 1,
        justifyContent: "space-around"
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
         marginVertical:15,
        backgroundColor:'#fff',
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:2, height:4},
        shadowOpacity:0.4,
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