import React,{useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Dimensions,
    FlatList
} from 'react-native'
import bc from '../assets/bc.jpg'
import { FontAwesome5 } from '@expo/vector-icons'
import spaghetti from '../assets/spaghetti.jpg'
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";
import GlobalStyles from "../assets/GlobalStyles";
import moment from "moment";
import Sm from "../components/Sm";
import {Card, ScrollView} from "native-base";
import HTMLView from "react-native-htmlview/HTMLView";


const Menuds = () => {
    const navigation = useNavigation();
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(true);
    const URI = 'http://192.168.1.21:8000';
    useEffect( () => {
        const asyncFetchDailyData = async () => {
            //  const v = await AsyncStorage.getItem('token');
            //console.log(v);
            fetch(URI + '/api/menu/menuds',{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    // 'Authorization' : 'Bearer '+v,
                    'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTYzNjQzNSwiZXhwIjoxNjU1NjQwMDM1LCJuYmYiOjE2NTU2MzY0MzUsImp0aSI6IkJmY2pRVlB3ZTY2MFl5azUiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.TpUZsZgfisum7dyv2CMdlR3hks43xi0RbNCS05zag1E',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    console.log("--------------json-------------", json.menu)
                    setData(json.menu)
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }

        asyncFetchDailyData();
    }, []);

    return(
        <ImageBackground source={bc} style={styles.body}>
            <Header title={"Menu de la semaine"} pressHandler={() => navigation.navigate('Home')}/>

            <View >

                <FlatList
                               data={data}

                              keyExtractor={item => item.id}
                                renderItem={({ item }) => (

                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                           <Image style={styles.img} source={{ uri: 'http://192.168.1.21:8000/'+item.image }}/>
                            <Text style={styles.day}>{item.jour} </Text>
                            <HTMLView  style={styles.menu}  value={item.menu}/>
                    {/*        <Text style={styles.menu}>Plat principal : Spaghetti</Text>*/}
                    {/*        <Text style={styles.menu}>Dessert : Pomme</Text>*/}
                           <Sm style={[GlobalStyles.CardHeaderLeftBottom, GlobalStyles.Infor]}> {item.date} </Sm>

                        </View>

                    </View>
                                )}
                               />



        
            </View>
    </ImageBackground>
    )
}

export default Menuds;

 
const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
    cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:20,
        backgroundColor:'#fff',
        height:300,
        borderRadius:20,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: 7,
        elevation: 9,
        opacity:0.9
        
         
   
    },
    body:{
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
    text:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
    bar:{
       
        alignItems:'flex-end',
        margin:10,
        flex: 1
        
    },
    img:{
        width: deviceWidth - 20,
        height:190,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        opacity: 0.9,


    },
    day:{
        fontSize:20,
        fontWeight:'560',
        left:5
    },
    menu:{
        fontWeight:'200',
        fontSize:18,
        left:5


    },
})