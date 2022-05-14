import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity, TextInput, Dimensions} from 'react-native'
import bc from '../assets/bc.jpg'
import { FontAwesome5 } from '@expo/vector-icons'
import spaghetti from '../assets/spaghetti.jpg'
import { useNavigation } from '@react-navigation/native';


const Menuds = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={bc} style={styles.body}>

            <View >
        
                    <View style={styles.header}>
                    <TouchableOpacity 
                                onPress={()=> navigation.navigate("Home")}>
                                <FontAwesome5 name="arrow-left" color="white" size="sm"
                                m={2}
                                _light={{
                                    color:"black"
                                }}
                                _dark={{
                                    color:"gray.100.300"
                                }}
                                
                                
                                />
                         </TouchableOpacity>
                        <Text style={styles.text}>Menu de la semaine</Text>
                        
                        <SafeAreaView >
                            <TouchableOpacity style={styles.bar}
                            onPress={()=> navigation.navigate("#")}>
                                <FontAwesome5 name="bars" size={24} color="white"/>
                            </TouchableOpacity>
                         </SafeAreaView>
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                        <Text style={styles.day}>Lundi 02/05/2022</Text>
                            <Image style={styles.img} source={spaghetti}/>
                            <Text style={styles.menu}>Entrée : Soupe</Text>
                            <Text style={styles.menu}>Plat principal : Spaghetti</Text>
                            <Text style={styles.menu}>Dessert : Pomme</Text>

                        </View>

                    </View>
                    <View style={styles.middle}>
                        <View style={styles.cardContainer}>
                            <Image style={styles.img} source={spaghetti}/>
                            <Text style={styles.day}>Lundi 02/05/2022</Text>
                            <Text style={styles.menu}>Entrée : Soupe</Text>
                            <Text style={styles.menu}>Plat principal : Spaghetti</Text>
                            <Text style={styles.menu}>Dessert : Pomme</Text>

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
        height:190,
        borderTopLeftRadius:20,
        borderTopRightRadius:20, 
        opacity: 0.9
    },
    day:{
        fontSize:20,
        fontWeight:'560',
        textAlign:'center'
    },
    menu:{
        fontWeight:'200',
        fontSize:18,
        textAlign:'center'

    },
})