import React, {useEffect} from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground, ScrollView, Dimensions, Button as RNButton } from 'react-native';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import ErrorMessage from '../../components/ErrorMessage';
import { NativeBaseProvider} from 'native-base'
import bc from '../../assets/bc.jpg';
import {TextField} from "@material-ui/core";
//import Button from '@material-ui/core/Button';
import {StatusBar} from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const Contact = ({ formData, setForm})=>{
    const navigation = useNavigation();

    useEffect(()=>{
        const id = navigation.getState()
        console.log('aaaaaaaaaaaaa---',id );
        let params ;
        id.routes.forEach(item => {
            if (item.name === 'Contact1') {
                params = item.params.infoParent;
                setinfoParent(item.params.infoParent);

            }
        });
        console.log('--------aaaa', params);
    })

    const [adresse, setAdresse] = useState('');
    const [infoParent, setinfoParent]= useState(null);
    const [adresseerror, setAdresseerror] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [nbEnfant, setNbEnfant] = useState('');
    const [nbEnfantError, setnbEnfantError] = useState('');
    const [rightIcon, setRightIcon] = useState('eye');

    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState('');
    const [signupError, setSignupError] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0;

    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
            setRightIcon('eye-off');
            setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
            setRightIcon('eye');
            setPasswordVisibility(!passwordVisibility);
        }
    };
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const onHandleSignup = async () => {

        if ( adresse !== '' && email !== '' && password !== '' && nbEnfant !=='') {
            if (password.length <7)
                setPasswordError('minimum 8 charachter ')
            else if( !validateEmail(email) )
                setEmailerror('please enter a valid email!!!')
            else{
                let complementinfo = {
                    'adresse':adresse,
                    'email':email,
                    'password': password,
                    'nbEnfants': nbEnfant, ...infoParent

                }
                console.log('--------------------------', complementinfo);
                navigation.navigate('Enfant',{complementinfo:complementinfo})
            }


        } else {

            alert('fill all the inputs please!!')

        }


    }

    return (
        <ImageBackground source={bc} style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={40}  >
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
                            placeholder='Enter addresse'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'


                            value={adresse}
                            onChangeText={text => setAdresse(text)}
                        />
                        {adresseerror ? <ErrorMessage error={adresseerror} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='face-man'
                            placeholder='Enter nombre enfant'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            textContentType='emailAddress'

                            value={nbEnfant}
                            onChangeText={text => setNbEnfant(text)}
                        />
                        {nbEnfantError ? <ErrorMessage error={nbEnfantError} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='cellphone'
                            placeholder='Enter email'
                            autoCapitalize='none'



                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        {emailerror ? <ErrorMessage error={emailerror} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='lock'
                            placeholder='Enter password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={passwordVisibility}
                            textContentType='password'
                            rightIcon={rightIcon}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            handlePasswordVisibility={handlePasswordVisibility}
                        />
                        {passwordError ? <ErrorMessage error={passwordError} visible={true} /> : null}

                        {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
                        <Button
                            onPress={onHandleSignup}
                            backgroundColor='#3e454d'
                            title='Suivant'
                            tileColor='#fff'
                            titleSize={20}
                            containerStyle={{
                                marginBottom: 24
                            }}
                        />

                        <RNButton
                            onPress={() => navigation.navigate('Login')}
                            title='Go to Login'
                            color='#3e454d'
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )


}

export default ()=>{
    return (
        <NativeBaseProvider>
            <Contact/>
        </NativeBaseProvider>

    )

}
const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,backgroundColor: '#fff',
        paddingHorizontal: 12
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2aabe4',

        paddingBottom: 24
    },

    middle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer:{
        width: deviceWidth - 20,
        margin:10,
        marginTop:15,
        backgroundColor:'#fff',
        height:335,
        borderRadius:5,
        shadowColor:'#000',
        shadowOffset: {width:12, height:5},
        shadowOpacity:0.1,
        shadowRadius: -1,
        elevation: 9,
        opacity:0.9,
    },
    titre:{
        fontSize:22,
        fontWeight:'750',
        color:"#00b894"
    },
    buttonStyle:{
        marginTop: 15,
        marginBottom:15,
        marginLeft:15,
        marginRight:15,
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
})