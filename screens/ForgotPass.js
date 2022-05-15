import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

const ForgotPass = () => {
    const navigation = useNavigation();
    return(
        <ImageBackground source={bc} style={styles.container}>
        <View >
            <View style={styles.middle}>
                <Image style={styles.img}
                source={logo}/>
                <Text style={styles.textLogin}> </Text>
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

           
   

            {/*Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={()=> navigation.navigate("#")}>
                    Changer mot de passe
                </Button>
            </View>
          
            
        </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <ForgotPass/>
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        
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
    buttonDesign:{
        backgroundColor:'#026efd'
    },

})