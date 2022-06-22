import React , {useEffect, useState}from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import Header from './Header';
import StudnetInfoItem from "../components/StudnetInfoItems";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Info = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const URI = 'http://192.168.1.23:8000';

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            const token= await AsyncStorage.getItem('userToken');
            //console.log(v);
            fetch(URI + '/api/info/info',{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                     'Authorization' : 'Bearer '+token,
                    //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjQzLjM1OjgwMDBcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTU3MjAzNTEsImV4cCI6MTY1NTcyMzk1MSwibmJmIjoxNjU1NzIwMzUxLCJqdGkiOiJJa1FESkpJOU1KWXJhQXpuIiwic3ViIjoxMTEsInBydiI6ImZjNzY4MjRmYWUzMmNiZWEyMmJmZmFkZTNiNTUyMDAwOGYzNzA4NzIifQ.U3tEMH9OQHhzXuE_Hu2LuCRRdnZZiPo8N14VNovPJbg',

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
            <Header title={"Informations"} pressHandler={() => navigation.navigate('Home')}/>
        <View >


            <View style={styles.middle}>
                <Text style={styles.text}>Mon/ Mes enfant(s)</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({item, index}) => (
                    <StudnetInfoItem item={item} index={index}   pressHandler={() => navigation.navigate('ListInfo',{id: item.class.id})}/>
                )}

                keyExtractor={(item => item.id)}
            />
            {/*<View style={styles.middle}>*/}
            {/*    <TouchableOpacity onPress={()=> navigation.navigate('ListInfo')}>*/}
            {/*            <View style={styles.cardContainer}>*/}
            {/*                */}
            {/*                <Image source={enf1} style={styles.img}/>*/}
            {/*                <View style={styles.info}>*/}
            {/*                <Text style={styles.nom} >salma chaouch</Text>*/}
            {/*                <Text > Niveau : 1ere année</Text>*/}
            {/*                <Text > Classe : Farachet</Text>*/}
            {/*                <Text style={styles.day}>Nombre information réçu: */}
            {/*                <Badge value="10" status="success" /> */}
            {/*                </Text>*/}

            {/*                </View>*/}

            {/*            </View>*/}
            {/*        </TouchableOpacity>*/}

            {/*        </View>*/}
             
            
        </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Info/>
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


     text:{
         fontWeight:'550',
         fontSize:23,
         color:'#2D9C39',
         marginTop:25,
         textDecorationLine: "underline",
         textDecorationStyle: "solid",
     },
     cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#E1E8E5',
        height:150,
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
        flexDirection:'row'
    },
    img:{
        height:80,
        width:80,
        borderRadius:50,
        opacity:1,
        margin:25

    },
    info:{
        flexWrap:'wrap',
        justifyContent:"center",
    },
    nom:{
        fontSize:15,
        fontWeight:'650'
    }

   
    

})