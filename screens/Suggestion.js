import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";

const Suggestion = () => {
    const navigation = useNavigation();
    return(
        <ImageBackground source={bc} style={styles.container}>
            <Header title={'Suggestion'} pressHandler={() => navigation.navigate('Home')}/>

            <View >

            <View style={styles.middle}>
                <Image style={styles.img}source={logo}/>
            </View>
            <View style={styles.middle}>
                <Text style={styles.textSugg}> Créer votre suggestion</Text>
            </View>

            {/*email input field */}
            <View style={styles.buttonStyle}>
                <View style={styles.emailInput}>
                    <Input
                    
                    
                    variant = "outline"
                    placeholder = "Sujet"
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
                <View style={styles.textarea}>
                    <Input
                        
                        variant= "outline"
                        multiline= {true}
                        
                        numberOfLines={4}
                        placeholder="Détail"
                       
                    />
                </View>

            </View>
  

            {/*Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} >
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
            <Suggestion/>
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
    textarea:{
        height:125,
        margin:20,
        marginRight:8,
        marginLeft:8,
        padding:12,
        marginTop:10,
       backgroundColor:'#fff',
        borderColor: '#464646',
        
      
        
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
    buttonStyle:{
        marginTop: 30,
        marginLeft:15,
        marginRight:15,
        
    },
   
    buttonDesign:{
        backgroundColor:'#026efd',
        
    },
    img:{
        marginTop:100,
        width:100,
        height:100
    },
    textSugg:{
        marginTop:10,
        fontSize:20,
        fontWeight:'bold'
        
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
     },
   

   
    

})