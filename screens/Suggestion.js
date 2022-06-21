import React ,  {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import {Input, Icon, NativeBaseProvider, Button, InputRightAddon, ScrollView} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";

const Suggestion = () => {
    const [sujet, setSujet]= useState({value:'', error:''});
    const [detail, setDetail]= useState({value:'', error:''});

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const URI = 'http://192.168.1.23:8000';
    const sendSuggestion = ()=>{
        fetch(URI + '/api/user/suggestion',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                // 'Authorization' : 'Bearer '+v,
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTU6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTczNTM2MCwiZXhwIjoxNjU1NzM4OTYwLCJuYmYiOjE2NTU3MzUzNjAsImp0aSI6IjdHU0c2NXY1aUN5R3F2Tk0iLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.SFzTzTtEdNLfZH8HKoe2RetkAlknPPFLICPaYW0HQLw',

            },
            body: JSON.stringify({"sujet": sujet.value, "detail": detail.value})
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("--------------json-------------", json)
                setData(json)
                navigation.navigate('Home');
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }


    return(
        <ImageBackground source={bc} style={styles.container}>
            <ScrollView>

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
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => setSujet({value: text})}
                        value={sujet.value}
                        placeholder="useless placeholder"
                        keyboardType="default"
                        returnKeyType="next"
                    />

                </View>

            </View>

            {/*textarea input field*/}
            <View style={styles.buttonStylex}>
                <View style={styles.textarea}>
                    <TextInput
                        multiline
                        numberOfLines={10}
                        style={styles.inputTextArea}
                        onChangeText={(text) => setDetail({value: text})}
                        value={detail.value}
                        placeholder="useless placeholder"
                        keyboardType="default"
                        returnKeyType="end"

                    />
                </View>

            </View>
  

            {/*Button */}
            <View style={styles.buttonStyle}>
                <Button style={styles.buttonDesign} onPress={()=> sendSuggestion()} >
                    Envoyer
                </Button>
            </View>
            
            
        </View>
        </ScrollView>
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
        height:90,
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputTextArea: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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