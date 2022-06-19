import React ,  {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";

const Suggestion = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const URI = 'http://192.168.1.21:8000';
    const sendSuggestion = (sujet, detail)=>{
        fetch(URI + '/api/user/suggestion',{
            method:'post',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                // 'Authorization' : 'Bearer '+v,
                'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTYzODcyNiwiZXhwIjoxNjU1NjQyMzI2LCJuYmYiOjE2NTU2Mzg3MjYsImp0aSI6Ikx2emxMTElBZmZXbVJFY0oiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.mrtx2Ux6ZeJW5djSn4NQ6vINDy0m10Nq57lUnnQ5_iY',

            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("--------------json-------------", json.data)
                setData(json.data)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            //  const v = await AsyncStorage.getItem('token');
            //console.log(v);
            fetch(URI + '/api/user/suggestion',{
                method:'post',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    // 'Authorization' : 'Bearer '+v,
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTYzODcyNiwiZXhwIjoxNjU1NjQyMzI2LCJuYmYiOjE2NTU2Mzg3MjYsImp0aSI6Ikx2emxMTElBZmZXbVJFY0oiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.mrtx2Ux6ZeJW5djSn4NQ6vINDy0m10Nq57lUnnQ5_iY',

                },


            })
                .then((response) => response.json())
                .then((json) => {
                    console.log("--------------json-------------", json.data)
                    setData(json.data)
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }

        asyncFetchDailyData();
    }, []);
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
                <Button style={styles.buttonDesign} onPress={()=> sendSuggestion('hhhhh','hbhbh')} >
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