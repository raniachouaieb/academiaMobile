import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    return(
        <ImageBackground source={bc} style={styles.container}>
        <View >
            <View style={styles.middle}>
                <Image style={styles.img}
                source={logo}/>
                <Text style={styles.textLogin}> Vous êtes les bienvenues</Text>
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
                    <Text style={styles.passOublie}>Mot de passe oublié?</Text>
                </TouchableOpacity>           
             </View>

            {/*Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("Home")}>
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