import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import { Input, Icon, NativeBaseProvider, Button } from 'native-base'
import Header from './Header'
import s2 from '../assets/s2.png'
import bc from '../assets/bc.jpg'
import s1 from '../assets/s1.png'
import schedule from '../assets/schedule.png'
import burger from '../assets/burger.png'
import conv from '../assets/newsletter.png'
import comment from '../assets/comment.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  
    const navigation = useNavigation();
   
    return(
        
        <ImageBackground source={bc} style={styles.body}>

            <View>
        
            <Header label="Accueil"/>            
                    <View style={styles.container}>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                            <TouchableOpacity onPress={()=> navigation.navigate("Task")}>
                                <Image source={s2} style={styles.img}/>
                                <Text style={styles.tache}>Travail à faire</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                            <TouchableOpacity onPress={()=> navigation.navigate("Info")}>
                            <Image source={s1} style={styles.img}/>
                                <Text style={styles.tache}>Note d'info</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <TouchableOpacity onPress={()=> navigation.navigate("Menuds")}>
                                    <Image source={burger} style={styles.img}/>
                                </TouchableOpacity>
                                    <Text style={styles.tache}>Menu de la semaine</Text>
                               

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <TouchableOpacity onPress={()=> navigation.navigate("Convocation")}>
                                    <Image source={conv} style={styles.img}/>
                                    <Text style={styles.tache}>Convocations</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <TouchableOpacity onPress={()=> navigation.navigate('Contact')}>
                            <Image source={schedule} style={styles.img}/>
                                <Text style={styles.tache}>Emploi</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.inner}>
                                <TouchableOpacity onPress={()=> navigation.navigate("Suggestion")}>
                                    <Image source={comment} style={styles.img}/>
                                    <Text style={styles.tache}>Suggestion</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                
            </View>
       </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Home/>
        </NativeBaseProvider>

    )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'#fff',

    },
    header:{
        flex: 1,
        width: 360,
        height:20,
        padding:15,
      
        backgroundColor: '#17a2b8',
    },
    text:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
     },
    container:{
    
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"center",
    },
    box:{
        marginTop:70,
        width:165,
        height:165,
        padding:10,
        borderRadius:10,
        shadowOffset: {width: 1, height: -1},
        shadowOpacity: 1,
        shadowRadius: 6,
       

    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        width:70,
        height:70
    },
    tache:{
        color:'#13287e',
        fontSize:15,
        fontWeight:'bold'
    },
    bar:{
       
        alignItems:'flex-end',
        margin:10,
        flex: 1
        
    },


})