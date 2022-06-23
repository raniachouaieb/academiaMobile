import React from 'react'
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    ToastAndroid,
    View,
    KeyboardAvoidingView,
    ImageBackground,
    ScrollView,
    Dimensions,
    Button as RNButton,
    FlatList, Text
} from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import ErrorMessage from '../components/ErrorMessage';
import { NativeBaseProvider} from 'native-base'
import Header from "./Header"
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';
import bc from '../assets/bc.jpg';
import {TextField} from "@material-ui/core";
//import Button from '@material-ui/core/Button';
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Kids from "../components/Kids";
import {FontAwesome5} from "@expo/vector-icons";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const KidsInformation = ()=>{
    const navigation = useNavigation();


    const [nomEleve, setnomEleve] = useState('');
    const [nomEleveerror, setnomEleveerror] = useState('');
    const [prenomEleve, setprenomEleve] = useState('');
    const [prenomEleveerror, setprenomEleveerror] = useState('');
    const [Gender, setGender] = useState();
    const [Niveau, setNiveau] = useState();
    const [date, setDate] = useState('2016-02-05')
    const [nbEnfant, setNbEnfant] = useState('');
    const [nbEnfantError, setnbEnfantError] = useState('');
    const [Complementinfo, setComplementinfo] = useState(null);

    const [email, setEmail] = useState('');
    const [kids, setKids] = useState('');

    const [emailerror, setEmailerror] = useState('');
    const [signupError, setSignupError] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

    const [inputList, setInputList] = useState([{  id : 1,nomEleve: null, prenomEleve: null, birth: null , gender: null , level : null}]);
    const handleAddClick = () => {
        setInputList([...inputList, { numberofAdults: 0, numberofChild: 0, numberofInfants: 0 }]);
        scrollViewRef.current.scrollToEnd({ animated: true });
    };

    useEffect(()=>{
        const id = navigation.getState()
        console.log('aaaaaaaaaaaaa---',id );
        let params ;
        id.routes.forEach(item => {
            if (item.name === 'KidsInformation') {
                params = item.params.kids;
                setKids(item.params.kids);

            }
        });
        console.log('--------aaaa', params);

    },[])
    const handleAdultCallback = (id, item) => {
        //this.setState({name: childData})


        let middle = kids.map(p => {
                if (p.id === id) {



                    return {...p ,'nomEleve': item.nomEleve, 'prenomEleve':item.prenomEleve}
                }
                else return p
            }
        );
        console.log('---------middlevrai---------', middle);
        setKids(middle);
        console.log('---------kids in middle ---------', kids);

    }
    const onHandleSignup = async () => {

            const token= await AsyncStorage.getItem('userToken');
        let data;
        let i =0;
        let done = kids.length;
                kids.forEach( async(element) => {
                    i++;
                     data={
                        'nomEleve':element.nomEleve,
                        'prenomEleve':element.prenomEleve
                    };
                    console.log('---------eleve------',data);
                    await fetch( 'http://192.168.1.23:8000/api/user/updateElev/'+element.id,{
                        method:'post',
                        headers:{
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization' : 'Bearer '+token,


                        },
                        body: JSON.stringify(data)


                    }).then(res => res.json())
                        .then(async resData => {
                            console.log(resData)
                            if(resData.hasOwnProperty('message'))
                            {

                                console.log('done');

                            }

                        });
                })

    if(i ===done)
        navigation.navigate('Profile');

    }
    return (
        <View style={{flex:1}}>


            <Header title ={"Complement d'iformation"}/>
            <ImageBackground source={bc} style={styles.container}>

                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={5}  >
                    <ScrollView >
                        <StatusBar style='dark-content' />
                        <View style={{justifyContent:'space-between', flexDirection:'row' , backgroundColor:'#fff', borderRadius:8, paddingVertical:20, paddingHorizontal:5, marginBottom:10}}>
                            <View style={{alignItems:'center'}}>
                                <View style={{borderRadius:10,width:20,overflow:'hidden', height:20, alignItems:'center', backgroundColor:'red' }}>
                                    <FontAwesome5 name="check" size={16} color="black" style={{backgroundColor:'red'}}/>
                                </View>

                                <Text>
                                    informations
                                </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{borderRadius:10,width:20,overflow:'hidden' }}>
                                    <Text style={{borderRadius:10, color:'#fff',  backgroundColor:'red' , width:20, textAlignVertical:'center', textAlign:'center'}}>
                                    2
                                    </Text>
                                </View>

                                <Text>
                                    les enfants
                                </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{borderRadius:10,width:20,overflow:'hidden' , borderColor:'red', borderWidth:0.5}}>
                                    <Text style={{borderRadius:10, color:'red',  backgroundColor:'#fff' , width:20, textAlignVertical:'center', textAlign:'center'}}>
                                        3
                                    </Text>
                                </View>

                                <Text>
                                    Terminé
                                </Text>
                            </View>

                        </View>
                        <View style={styles.container}>

                            <FlatList data={kids} renderItem={({item,index})=>{
                                return(
                                    <View >
                                        <View style={{justifyContent:'space-between', flexDirection:'row'}}>
                                            <Text style={{fontWeight:'bold'}}>
                                                Information sur l'élève {index+1}
                                            </Text>
                                            <View style={{overflow:'hidden', backgroundColor:'red' , height:20, width:20, alignItems:'center', justifyContent:'center', borderRadius:10}}>
                                                <FontAwesome5 name="minus" size={16} color="black" style={{backgroundColor:'red' , borderRadius:2}}/>
                                            </View>

                                        </View>

                                        <Kids data={item} dataChangeCallBack={handleAdultCallback}/>
                                    </View>

                                )

                            } }   keyExtractor={(item => item.id)}

                            />








                            <Button
                                onPress={onHandleSignup}
                                backgroundColor='#3e454d'
                                title='Submit'
                                tileColor='#fff'
                                titleSize={20}
                                containerStyle={{
                                    marginBottom: 24
                                }}
                            />


                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <KidsInformation/>
        </NativeBaseProvider>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,backgroundColor: '#fff',
        paddingHorizontal: 12


    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",

    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    }, button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 15,
        backgroundColor: '#efefef',
        padding: 1
    },
    inactiveTab: { borderBottomColor: '#fff', textAlign: 'center', borderBottomWidth: 2, flex: 1, paddingBottom: 5 },
    activeTab: { borderBottomColor: '#ff4040', textAlign: 'center', borderBottomWidth: 2, flex: 1, paddingBottom: 5 },
    title: {
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 15,
        flex: 3

    }
});