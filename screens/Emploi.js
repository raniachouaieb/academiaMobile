import React, {useEffect, useState} from 'react'
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
import enf1 from '../assets/enf1.jpg'
import { Badge } from 'react-native-elements';
import StudentItem from '../components/Studenttems';
import data from "./data";
import Header from "./Header"
import HomeItems from "../components/HomeItems";
import AsyncStorage from '@react-native-async-storage/async-storage'
import StudentEmpItem from "../components/StudentEmpItem";

const Emploi = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const URI = 'http://192.168.1.23:8000';

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            const token= await AsyncStorage.getItem('userToken');
            //console.log(v);
            fetch(URI + '/api/emploi/getEnfant',{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer '+token,
                    //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTU6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTc0MDMyOCwiZXhwIjoxNjU1NzQzOTI4LCJuYmYiOjE2NTU3NDAzMjgsImp0aSI6ImQxdkc0SUpXSmhBNUg3ZVgiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.0XT1IPEWLXNNsgwGo67RewWpyWXo7m7jxOn7Fbkw0lo',

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
            <Header title={'Emploi du temps'} pressHandler={() => navigation.navigate('Home')}/>

            <View >
                <View style={styles.middle}>
                    <Text style={styles.text}>Mon/ Mes enfant(s)</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({item, index}) => (
                        <StudentEmpItem item={item} index={index}   pressHandler={() => navigation.navigate('EmpByClass',{id : item.class.id})
                        }/>

                    )}

                    keyExtractor={(item => item.id)}
                />

                {/*<View style={styles.middle}>*/}
                {/*        <TouchableOpacity onPress={()=> navigation.navigate('ListConv')}>*/}
                {/*            <View style={styles.cardContainer}>*/}
                {/*                */}
                {/*                <Image source={enf1} style={styles.img}/>*/}
                {/*                <View style={styles.info}>*/}
                {/*                <Text style={styles.nom} >salma chaouch</Text>*/}
                {/*                <Text > Niveau : 1ere année</Text>*/}
                {/*                <Text > Classe : Farachet</Text>*/}
                {/*                <Text style={styles.day}>Total Convocation: */}
                {/*                <Badge value="2" status="success" /> */}
                {/*                </Text>*/}

                {/*                </View>*/}

                {/*            </View>*/}
                {/*        </TouchableOpacity>*/}

                {/*</View>*/}


            </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Emploi/>
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
        flex:1,
        marginTop:-3
    },
    HeaderText:{
        color:'#fff',
        fontWeight:'700',
        textAlign:'center',
    },
    text:{
        fontWeight:'550',
        fontSize:23,
        color:'#2D9C39',
        marginTop:25
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