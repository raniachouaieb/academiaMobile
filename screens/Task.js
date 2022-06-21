import React,{useEffect, useState} from 'react'
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
import {Input, Icon, NativeBaseProvider, Button, InputRightAddon, ScrollView} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'react-native-elements';
import Header from './Header';
import StudentItem from "../components/Studenttems";
import TaskStudentItem from "../components/TaskStudentItem";

const Task = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const URI = 'http://192.168.1.23:8000';

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            //  const v = await AsyncStorage.getItem('token');
            //console.log(v);
            fetch(URI + '/api/task/listEnf',{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    // 'Authorization' : 'Bearer '+v,
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjQzLjM1OjgwMDBcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTU3MjAzNTEsImV4cCI6MTY1NTcyMzk1MSwibmJmIjoxNjU1NzIwMzUxLCJqdGkiOiJJa1FESkpJOU1KWXJhQXpuIiwic3ViIjoxMTEsInBydiI6ImZjNzY4MjRmYWUzMmNiZWEyMmJmZmFkZTNiNTUyMDAwOGYzNzA4NzIifQ.U3tEMH9OQHhzXuE_Hu2LuCRRdnZZiPo8N14VNovPJbg',

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
            <Header title={"Travail à faire"}  pressHandler={() => navigation.navigate('Home')}/>

            <View >


                <View style={styles.middle}>
                    <Text style={styles.text}>Mon/ Mes enfant(s)</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({item, index}) => (
                        <TaskStudentItem item={item} index={index}   pressHandler={() => navigation.navigate('ListTask')}/>
                    )}

                    keyExtractor={(item => item.id)}
                />
           
                {/*<TouchableOpacity onPress={()=> navigation.navigate("ListTask")}>*/}
                {/*    <View style={styles.cardContainer}>*/}

                {/*            */}
                {/*                <Image source={enf1} style={styles.img}/>*/}
                {/*                <View style={styles.info}>*/}
                {/*                    <Text style={styles.nom} >salma chaouch</Text>*/}
                {/*                    <Text > Niveau : 1ere année</Text>*/}
                {/*                    <Text > Classe : Farachet</Text>*/}
                {/*                    <Text style={styles.day}>Nombre travail à faire : */}
                {/*                    <Badge value="125" status="success" /> */}
                {/*                    </Text>*/}

                {/*                </View>*/}
                {/*          */}

                {/*    </View>*/}
                {/*            */}

                {/*</TouchableOpacity>*/}
</View>
        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Task/>
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

        width: deviceWidth - 20,
        height:15,
        marginTop:25,
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
       justifyContent:'center'
    },
    nom:{
        fontSize:15,
        fontWeight:'650'
    }

   
    

})