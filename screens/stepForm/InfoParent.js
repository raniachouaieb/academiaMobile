import React from 'react'
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
import Header from "../Header";
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const InfoParent = ({ formData, setForm})=>{
    const navigation = useNavigation();


    const [lastname, setLastname] = useState('');
    const [lastnameerror, setlastnameerror] = useState('');
    const [travail, setTravail] = useState('');
    const [travailerror, settravailerror] = useState('');
    const [firstname, setFirstname] = useState('');
    const [firstnameerror, setFirstnameerror] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumbererror, setPhonenumbererror] = useState('');
    const [lastnameMaman, setLastnameMaman] = useState('');
    const [lastnameerrorMaman, setlastnameerrorMaman] = useState('');
    const [travailMaman, setTravailMaman] = useState('');
    const [travailerrorMaman, settravailerrorMaman] = useState('');
    const [firstnameMaman, setFirstnameMaman] = useState('');
    const [firstnameerrorMaman, setFirstnameerrorMaman] = useState('');
    const [phonenumberMaman, setPhonenumberMaman] = useState('');
    const [phonenumbererrorMaman, setPhonenumbererrorMaman] = useState('');
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

    const onHandleSignup = async () => {

            if ( travail !== '' && firstname !== '' && lastname !== '' && phonenumber !== ''&& travailMaman !== '' && firstnameMaman !== '' && lastnameMaman !== '' && phonenumberMaman !== '') {
let infoParent={
    'nomPere':firstname,
    'prenomPere':lastname,
    'telPere':phonenumber,
    'professionPere':travail,
    'nomMere':firstnameMaman,
    'prenomMere':lastnameMaman,
    'telMere':travailMaman,
    'professionMere':phonenumberMaman




}
                navigation.navigate('Contact1',{infoParent: infoParent});

            } else {

                alert('fill all the inputs please!!')

            }


    }

    return (
        <View style={{flex:1}}>


            <Header title ={'Register'}/>
        <ImageBackground source={bc} style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={40}  >
                <ScrollView >
                    <StatusBar style='dark-content' />
                    <View style={styles.container}>


                    <Text style={styles.title}>1-Papa</Text>
                    <InputField
                        inputStyle={{
                            fontSize: 14
                        }}

                        containerStyle={{
                            backgroundColor: '#fff',
                            marginBottom: 20,


                        }}
                        leftIcon='face-man'
                        placeholder='Entrer votre nom'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'


                        value={firstname}
                        onChangeText={text => setFirstname(text)}
                    />
                    {firstnameerror ? <ErrorMessage error={firstnameerror} visible={true} /> : null}
                    <InputField
                        inputStyle={{
                            fontSize: 14
                        }}
                        containerStyle={{
                            backgroundColor: '#fff',
                            marginBottom: 20
                        }}
                        leftIcon='face-man'
                        placeholder='Entrer votre prenom'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'

                        value={lastname}
                        onChangeText={text => setLastname(text)}
                    />
                    {lastnameerror ? <ErrorMessage error={lastnameerror} visible={true} /> : null}
                    <InputField
                        inputStyle={{
                            fontSize: 14
                        }}
                        containerStyle={{
                            backgroundColor: '#fff',
                            marginBottom: 20
                        }}
                        leftIcon='cellphone'
                        placeholder='Entrer votre numéro du telephone'
                        autoCapitalize='none'
                        keyboardType='numeric'
                        textContentType='emailAddress'


                        value={phonenumber}
                        onChangeText={text => setPhonenumber(text)}
                    />
                    {phonenumbererror ? <ErrorMessage error={phonenumbererror} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='bag-suitcase'
                            placeholder='Votre profession'
                            autoCapitalize='none'

                            value={travail}
                            onChangeText={text => setTravail(text)}
                        />
                        {travailerror ? <ErrorMessage error={travailerror} visible={true} /> : null}

                        <Text style={styles.title}>2-Maman</Text>
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}

                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20,


                            }}
                            leftIcon='face-woman'
                            placeholder='Entrer votre nom'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'


                            value={firstnameMaman}
                            onChangeText={text => setFirstnameMaman(text)}
                        />
                        {firstnameerrorMaman ? <ErrorMessage error={firstnameerrorMaman} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='face-woman'
                            placeholder='Entrer votre prenom'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'

                            value={lastnameMaman}
                            onChangeText={text => setLastnameMaman(text)}
                        />
                        {lastnameerrorMaman ? <ErrorMessage error={lastnameerrorMaman} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='cellphone'
                            placeholder='Entrer votre numéro telephone'
                            autoCapitalize='none'
                            keyboardType='numeric'
                            textContentType='emailAddress'


                            value={phonenumberMaman}
                            onChangeText={text => setPhonenumberMaman(text)}
                        />
                        {phonenumbererrorMaman ? <ErrorMessage error={phonenumbererrorMaman} visible={true} /> : null}
                        <InputField
                            inputStyle={{
                                fontSize: 14
                            }}
                            containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                            }}
                            leftIcon='bag-suitcase'
                            placeholder='Votre profession'
                            autoCapitalize='none'

                            value={travailMaman}
                            onChangeText={text => setTravailMaman(text)}
                        />
                        {travailerrorMaman ? <ErrorMessage error={travailerrorMaman} visible={true} /> : null}

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
        </View>
    )


}

export default ()=>{
    return (
        <NativeBaseProvider>
            <InfoParent/>
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