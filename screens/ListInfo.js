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
import { Input, Icon, NativeBaseProvider, Button, InputRightAddon } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg';
import { useNavigation } from '@react-navigation/native';
import enf1 from '../assets/enf1.jpg';
import Header from './Header';
import { Badge } from 'react-native-elements';
import InformationDetailItems from "../components/InformationDetailItems";

const informationDetailItems=[
    {
        title: 'uuuu', description:'gfuyfu fyg', appointment:'02/02/2022'
    },
    {
        title: 'uuuu', description:'gfuyfu fyg', appointment:'02/02/2022'
    }
]
const ListInfo = () => {
    const navigation = useNavigation();

    return(
        <ImageBackground source={bc} style={styles.container}>
            <Header title={"Informations réçus"} pressHandler={() => navigation.navigate('Info')}/>

            <View >

            <View style={styles.middle}>
                <Text style={styles.text}>Liste des informations</Text>
            </View>

            <FlatList
                data={informationDetailItems}
                renderItem={({item, index}) => (
                    <InformationDetailItems item={item} index={index} key={index}/>
                )}
                keyExtractor={(item => item.id)}
            />
            {/*<View style={styles.middle}>*/}
            {/*    <TouchableOpacity onPress={()=> navigation.navigate("ListTask")}>*/}
            {/*            <View style={styles.cardContainer}>*/}
            {/*                */}
            {/*                <View style={styles.info}>*/}
            {/*                  */}
            {/*                    <Text >Sujet : hffcg</Text>*/}
            {/*                    <Text >Détail :  : yhbj bujnk</Text>*/}
            {/*                    <Text style={styles.day}>Envoyé le :   <Badge value=" 26-04-2022" status="success" /> */}

            {/*                    </Text>*/}

            {/*                </View>*/}

            {/*            </View>*/}
            {/*    </TouchableOpacity>*/}

            {/* </View>*/}
             
            
        </View>

        </ImageBackground>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <ListInfo/>
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
         marginTop:25,
         textDecorationLine: "underline",
         textDecorationStyle: "solid",

     },
     cardContainer:{
        width: deviceWidth - 20,
        margin:8,
        marginTop:15,
        backgroundColor:'#fff',
        height:90,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
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
        margin:10,
        fontSize:18,
        
       
    },
    nom:{
        fontSize:15,
        fontWeight:'650'
    },
    date:{
        marginLeft: 218,
    }

   
    

})