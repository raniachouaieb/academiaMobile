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
import { DataTable } from 'react-native-paper';

const Emploi = () => {
    const navigation = useNavigation(state => state.routes.length);
    const id = navigation.getState('id')
    console.log('aaaaaaaaaaaaa---',id.routeNames.indexOf('EmpByClass') );
    let params ;
    id.routes.forEach(item => {
        if (item.name === 'EmpByClass')
            params=item;
    });
    console.log('--------aaaa', params.params.id);
    const idclass = params.params.id;
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const URI = 'http://192.168.1.21:8000';

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            const token = await AsyncStorage.getItem('userToken');
            //console.log(v);
            fetch(URI + '/api/emploi/getEmploibyStudent/'+idclass,{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer '+token,
                   // 'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTU6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTc0MjYzOCwiZXhwIjoxNjU1NzQ2MjM4LCJuYmYiOjE2NTU3NDI2MzgsImp0aSI6IlVFbkp0aEg5NjZzOGpZbVEiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.6sSjFujAXYtPXPxsjouvnemUay2K0IdTTU0Avfzw76M',

                },


            })
                .then((response) => response.json())
                .then((json) => {

                    let tab =  Object.keys(json[0]);
                    let newlist = []
                        tab.forEach(item => {
                            if (item !== 'name')
                                newlist.push({
                                    lessons: json[0][item],
                                    day: item
                                })
                        });
                    console.log("--------------json-------------",newlist);
                    setData(newlist)
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }

        asyncFetchDailyData();
    }, []);
    const renderlessons = (lessons)=>{
        return lessons.map(item =>
            <DataTable.Row>
                <DataTable.Cell>{item.from} à {item.to} </DataTable.Cell>
                <DataTable.Cell >{item.name}</DataTable.Cell>
            </DataTable.Row>
        )

    }


    return(
        <ImageBackground source={bc} style={styles.container}>
            <Header title={'Emploi du temps'} pressHandler={() => navigation.navigate('Home')}/>

            <View >
                <View style={styles.middle}>
                    <Text style={styles.text}>Emploi du temps</Text>
                </View>
                <View style={styles.cardContainer}>
                    <Text style={styles.year}>2021-2022</Text>

                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item => item.id)}
                    renderItem={({item, index}) => (

                <DataTable style={styles.card}>
                    <DataTable.Header style={styles.headertab}>

                        <DataTable.Title>{item.day}</DataTable.Title>

                    </DataTable.Header>

                    {renderlessons(item.lessons)}

                </DataTable>
                    )}


                />






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


    text:{
        fontWeight:'550',
        fontSize:23,
        color:'#6C82DD',
        marginTop:25,
        textDecorationLine:"underline"
    },
    cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#B44B3F',
        height:45,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    card:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#fff',


    },
    year:{
        textAlign:'center',
        marginTop:10
    },
    headertab:{
        width: deviceWidth - 20,
        margin:8,
        height:45,
        marginTop:0,
        backgroundColor:'#FCD85D'
    }





})