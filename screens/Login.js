import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
const Login = () => {
    const [email, setEmail]= useState({value:'bonetek01@mercantravellers.com', error:''});
    const [password, setPassword]= useState({value:'753214896', error:''});
    const [tokenD, setDeviceToken] = useState({value: '', error: ''})

    const navigation = useNavigation();
    const URI = 'http://192.168.1.23:8000';


    myfunc =  async ()=>{

       //alert(URI + '/api/auth/login');
        let device_token= await AsyncStorage.getItem('device_token');
        await fetch( URI + '/api/auth/login',{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',


            },
            body: JSON.stringify({"email": email.value, "password": password.value ,"device_token":device_token})


        }).then(res => res.json())
            .then(async resData => {
                //console.log(resData)
                if (resData.token) {
                    navigation.navigate("Home");
                    console.log(resData);

                    await AsyncStorage.setItem('userToken', resData.token);
                    await AsyncStorage.setItem('id', `${resData.user}`);


                } else {
                    alert('email ou mot de passe incorrect')
                    navigation.navigate('Login');
                }

                //console.log(email,password);
                console.log(resData);
            });


    }

    function myfunc () {
        alert(email);
    }

    return(
        <ImageBackground source={bc} style={styles.container}>
        <View >
            <View style={styles.middle}>
                <Image style={styles.img}
                source={logo}/>
                <Text style={styles.textLogin}> Vous ??tes les bienvenues</Text>
            </View>

            {/*email input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                    InputLeftElement={
                        <Icon as={<FontAwesome5 name="envelope"/>}
                        size="sm"
                        m={2}
                        _light={{
                            color:'black',
                        }}
                        _dark={{
                            color:"gray.300",
                        }}

                        />
                    }

                    onChangeText={(text) => setEmail({value: text})}
                    value={email.value}
                    keyboardType="email-address"
                    variant = "outline"
                    placeholder = "Email"
                    _light={{
                        placeholderTextColor: "blueGray.400"
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50"
                    }}
                    />

                </View>

            </View>

            {/*Password input fiels*/}
            <View style={styles.buttonStylex}>
                <View style={styles.emailInput}>
                    <Input
                        InputLeftElement={
                            <Icon
                                as={<FontAwesome5 name="key"/>}
                                size="sm"
                                m={2}
                                _light={{
                                    color:"black"
                                }}
                                _dark={{
                                    color:"gray.100.300"
                                }}
                            />
                            
                        }

                        onChangeText={(text) => setPassword({value: text})}
                        value={password.value}
                        variant= "outline"
                        secureTextEntry={true}
                        placeholder="Mot de passe"
                        _light={{
                            placeholderTextColor:"blueGray.400"
                        }}
                        _dark={{
                            placeholderTextColor:"blueGray.50"
                        }}
                    />
                </View>

            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("ForgotPass")}>
                    <Text style={styles.passOublie}>Mot de passe oubli???</Text>
                </TouchableOpacity>           
             </View>

            {/*Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={myfunc}>
                    LOGIN
                </Button>
            </View>
            <View style={styles.middle}>
                <Text style={styles.textInscrire}>Vous n'avez pas encore un compte?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("MultiStepForm")}>
                <Text style={styles.register}>S'inscrire</Text>
            </TouchableOpacity>
            </View>
            
        </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
    },
    textLogin:{
        marginTop:10,
        fontSize:20,
        
    },
    middle:{
        alignItems:'center',
        justifyContent:'center',
    },
    emailInput:{
        marginTop:10,
        marginRight:5,
        backgroundColor:'#fff',
        padding:10,
    },
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
    },
    buttonStylex:{
        marginTop:12,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    img:{
        marginTop:100,
        width:100,
        height:100
    },
    textInscrire:{
        fontSize:19,
        opacity:0.6,
        marginTop:12
    },

    register:{
        color:'#026efd',
        fontWeight:'bold'
    },
    passOublie:{
        marginLeft:197,
        color:'#026efd',
        fontSize:15
    },

})