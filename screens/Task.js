import React from 'react'
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

const tasks =[
    {id:1,
        first_name :' bruh',
        last_name :'ayo', level :'1ere', classroom :'farchet', tasks_count:12, tasks_today:2

    },
    { id :2,
        first_name :' bruh',
        last_name :'ayo', level :'2eme', classroom :'farchet', tasks_count:12, tasks_today:2

    },
]
const Task = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={bc} style={styles.container}>
            <Header title={"Travail à faire"}  pressHandler={() => navigation.navigate('Home')}/>

            <View >


            <View style={styles.middle}>
                <Text style={styles.text}>Mon/ Mes enfant(s)</Text>
            </View>
                <FlatList
                    data={tasks}
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