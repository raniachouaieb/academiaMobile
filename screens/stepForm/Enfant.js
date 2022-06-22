import React from 'react'
import { useState, useEffect } from 'react';
import { StyleSheet, ToastAndroid, View, KeyboardAvoidingView, ImageBackground, ScrollView, Dimensions, Button as RNButton } from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import ErrorMessage from '../../components/ErrorMessage';
import { NativeBaseProvider} from 'native-base'
import Header from "../Header"
import DatePicker from 'react-native-datepicker';
import {Picker} from '@react-native-picker/picker';
import bc from '../../assets/bc.jpg';
import {TextField} from "@material-ui/core";
//import Button from '@material-ui/core/Button';
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Enfant = ()=>{
    const navigation = useNavigation();

    useEffect(()=>{
        const id = navigation.getState()
        console.log('aaaaaaaaaaaaa---',id );
        let params ;
        id.routes.forEach(item => {
            if (item.name === 'Enfant') {
                params = item.params.complementinfo;
                setComplementinfo(item.params.complementinfo);

            }
        });
        console.log('--------aaaa', params);
    })
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
    const [emailerror, setEmailerror] = useState('');
    const [signupError, setSignupError] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

    const [inputList, setInputList] = useState([{  id : 1,nomEleve: null, prenomEleve: null, birth: null , gender: null , level : null}]);
    const handleAddClick = () => {
        setInputList([...inputList, { numberofAdults: 0, numberofChild: 0, numberofInfants: 0 }]);
        scrollViewRef.current.scrollToEnd({ animated: true });
    };
    const handleRemoveClick = i => {
        console.log('---------index ----', i);
        const list = [...inputList];
        list.splice(i, 1);
        setInputList(list);
    };
    const onHandleSignup = async () => {

        if ( Niveau !== '' && nomEleve !== '' && prenomEleve !== '' && date !=='' && Gender !== '') {
                let data ={
                    'niveau':Niveau,
                    'gender':Gender,
                    'nomEleve':nomEleve,
                    'prenomEleve':prenomEleve,
                    'birth':date, ...Complementinfo
                }
                console.log('----------final data-----', data);
            await fetch( 'http://192.168.1.23:8000/api/auth/register',{
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',


                },
                body: JSON.stringify(data)


            }).then(res => res.json())
                .then(async resData => {
                    console.log(resData)
                    if(resData.hasOwnProperty('message'))
                    {

                             ToastAndroid.show("chek your email !", ToastAndroid.SHORT);
                             navigation.navigate('Login')

                    }

                });

        } else {

            alert('fill all the inputs please!!')

        }
    }
    return (
        <View style={{flex:1}}>


        <Header title ={'Register'}/>
        <ImageBackground source={bc} style={styles.container}>

            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={5}  >
                <ScrollView >
                    <StatusBar style='dark-content' />
                    <View style={styles.container}>


                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}

                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20,


                            }}
                            leftIcon='face-man'
                            placeholder='Enter nom'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'


                            value={nomEleve}
                            onChangeText={text => setnomEleve(text)}
                        />
                        {nomEleveerror ? <ErrorMessage error={nomEleveerror} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='face-man'
                            placeholder="Enter prenom d'enfant"
                            autoCapitalize='none'
                            keyboardType='numeric'
                            textContentType='emailAddress'

                            value={prenomEleve}
                            onChangeText={text => setprenomEleve(text)}
                        />
                        {prenomEleveerror ? <ErrorMessage error={prenomEleveerror} visible={true} /> : null}
                        <DatePicker

                            date={date} //initial date from state
                            mode="date" //The enum of date, datetime and time
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="01-02-2016"
                            maxDate="01-01-2019"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    //display: 'none',
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0,
                                },
                                dateInput: {
                                    marginLeft: 36,
                                },
                            }}
                            onDateChange={(date) => {
                                setDate(date);
                            }}
                        />
                        <Picker
                            style={{borderBottomColor:'black',
                                borderTopColor:'black', borderWidth:0.5, marginTop:4}}
                            selectedValue={Gender}
                            onValueChange={(itemValue, itemIndex) =>
                                setGender(itemValue)
                            }>
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>

                        <Picker
                            style={{borderBottomColor:'black',
                                borderTopColor:'black', borderWidth:0.5, marginBottom:4}}
                            mode="dropdown"
                            selectedValue={Niveau}
                            onValueChange={(itemValue, itemIndex) =>
                                setNiveau(itemValue)
                            }>
                            <Picker.Item label="1ere" value="27" />
                            <Picker.Item label="2eme" value="28" />
                            <Picker.Item label="3eme" value="29" />
                            <Picker.Item label="4eme" value="30" />
                            <Picker.Item label="5eme" value="37" />
                            <Picker.Item label="6eme" value="38" />
                        </Picker>



                        {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
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
            <Enfant/>
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