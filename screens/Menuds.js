import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import bc from '../assets/bc.jpg'
import { FontAwesome5 } from '@expo/vector-icons'
import spaghetti from '../assets/spaghetti.jpg'
import { useNavigation } from '@react-navigation/native';
import Header from "./Header";
import GlobalStyles from "../assets/GlobalStyles";
import moment from "moment";
import Sm from "../components/Sm";
import {ScrollView} from "native-base";


const Menuds = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={bc} style={styles.body}>
            <Header title={"Menu de la semaine"} pressHandler={() => navigation.navigate('Home')}/>

            <View >

                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                            <Image style={styles.img} source={spaghetti}/>
                            <Text style={styles.day}>Lundi </Text>

                            <Text style={styles.menu}>Entrée : Soupe</Text>
                            <Text style={styles.menu}>Plat principal : Spaghetti</Text>
                            <Text style={styles.menu}>Dessert : Pomme</Text>
                            <Sm style={[GlobalStyles.CardHeaderLeftBottom, GlobalStyles.Infor]}> 02/05/2022 </Sm>

                        </View>

                    </View>
                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                            <Image style={styles.img} source={spaghetti}/>
                            <Text style={styles.day}>Mardi</Text>
                            <Text style={styles.menu}>Entrée : Soupe</Text>
                            <Text style={styles.menu}>Plat principal : Spaghetti</Text>
                            <Text style={styles.menu}>Dessert : Pomme</Text>
                            <Sm style={[GlobalStyles.CardHeaderLeftBottom, GlobalStyles.Infor]}> 02/05/2022 </Sm>


                        </View>

                    </View>


        
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
        marginTop:15,
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