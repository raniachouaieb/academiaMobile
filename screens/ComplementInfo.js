import React, { useState ,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
    KeyboardAvoidingView, Button as RNButton, ToastAndroid
} from 'react-native'
import Button from '../components/Button';

import {Input, Icon, NativeBaseProvider, InputRightAddon, ScrollView} from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'
import bc from '../assets/bc.jpg'
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Header from "./Header";
import {StatusBar} from "expo-status-bar";
import InputField from "../components/InputField";
import ErrorMessage from "../components/ErrorMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ComplementInfo = () => {
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
    const [adresse, setadresse] = useState('');
    const [nbenfant, setnbenfant] = useState('');
    const [kids, setKids] = useState('');



    const [data,setData]=useState();

    const URI = 'http://192.168.1.23:8000';

    useEffect( () => {
        const asyncFetchDailyData = async () => {
            const token= await AsyncStorage.getItem('userToken');
            const id = await AsyncStorage.getItem('id');

            //console.log(v);
            fetch(URI + '/api/user/complementInfo/'+id,{
                method:'get',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : 'Bearer '+token,
                    //'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTU6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY1NTc0MDMyOCwiZXhwIjoxNjU1NzQzOTI4LCJuYmYiOjE2NTU3NDAzMjgsImp0aSI6ImQxdkc0SUpXSmhBNUg3ZVgiLCJzdWIiOjExMSwicHJ2IjoiZmM3NjgyNGZhZTMyY2JlYTIyYmZmYWRlM2I1NTIwMDA4ZjM3MDg3MiJ9.0XT1IPEWLXNNsgwGo67RewWpyWXo7m7jxOn7Fbkw0lo',

                },


            })
                .then((response) => response.json())
                .then((json) => {
                    console.log("--------------json-------------", json)
                    setData(json.data)
                    setFirstname(json.data.nomPere)
                    setLastname(json.data.prenomPere)
                    setPhonenumber(json.data.telPere)
                    setTravail(json.data.professionPere)
                    setFirstnameMaman(json.data.nomMere)
                    setLastnameMaman(json.data.prenomMere)
                    setPhonenumberMaman(json.data.telMere)
                    setTravailMaman(json.data.professionMere)
                    setEmail(json.data.email)
                    setadresse(json.data.adresse)
                    setnbenfant(json.data.nbEnfants)
                    setKids(json['0'])
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }

        asyncFetchDailyData();
    }, []);
    const onHandleSignup = async () => {
        const id = await AsyncStorage.getItem('id');


        if ( travail !== '' && firstname !== '' && lastname !== '' && phonenumber !== ''&& travailMaman !== '' && firstnameMaman !== '' && lastnameMaman !== '' && phonenumberMaman !== '' && email!=='' && adresse!== '' ) {
            let infoParent={
                'nomPere':firstname,
                'prenomPere':lastname,
                'telPere':phonenumber,
                'professionPere':travail,
                'nomMere':firstnameMaman,
                'prenomMere':lastnameMaman,
                'telMere':travailMaman,
                'professionMere':phonenumberMaman,
                'email':email,
                'adresse':adresse,
                'nbEnfants': nbenfant




            }
            console.log('----------final data-----', infoParent);
            const token= await AsyncStorage.getItem('userToken');

            await fetch( 'http://192.168.1.23:8000/api/user/updateAll/'+id,{
                method:'post',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+token,



                },
                body: JSON.stringify(infoParent)


            }).then(res => res.json())
                .then(async resData => {
                    console.log(resData)
                    if(resData.hasOwnProperty('message'))
                    {

                        alert('saved')
                        navigation.navigate('KidsInformation', {kids:kids})

                    }

                });

        } else {

            alert('fill all the inputs please!!')

        }
    }
    return(


            <ImageBackground source={bc} style={styles.container}>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={40}  >
                    <ScrollView >
                        <StatusBar style='dark-content' />
                        <View style={{justifyContent:'space-between', flexDirection:'row' , backgroundColor:'#fff', borderRadius:8, paddingVertical:20, paddingHorizontal:5, marginBottom:10}}>
                            <View style={{alignItems:'center'}}>
                                <View style={{borderRadius:10,width:20,overflow:'hidden' }}>
                                    <Text style={{borderRadius:10, color:'#fff',  backgroundColor:'red' , width:20, textAlignVertical:'center', textAlign:'center'}}>
                                        1
                                    </Text>
                                </View>

                                <Text>
                                    informations
                                </Text>
                            </View>
                            <View style={{alignItems:'center'}}>
                                <View style={{borderRadius:10,width:20,overflow:'hidden' , borderColor:'red', borderWidth:0.5}}>
                                    <Text style={{borderRadius:10, color:'red',  backgroundColor:'#fff' , width:20, textAlignVertical:'center', textAlign:'center'}}>
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
                            <Text style={styles.title}>3-Contact</Text>

                            <InputField
                                inputStyle={{
                                    fontSize: 14
                                }}

                                containerStyle={{
                                    backgroundColor: '#fff',
                                    marginBottom: 20,


                                }}
                                leftIcon='face-man'
                                placeholder='Entrer adresse'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'


                                value={adresse}
                                onChangeText={text => setFirstname(text)}
                            />
                            <InputField
                                inputStyle={{
                                    fontSize: 14
                                }}

                                containerStyle={{
                                    backgroundColor: '#fff',
                                    marginBottom: 20,


                                }}
                                leftIcon='email'
                                placeholder='Entrer email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'


                                value={email}
                                onChangeText={text => setFirstname(text)}
                            />
                            <Button
                                onPress={onHandleSignup}
                                backgroundColor='#3e454d'
                                title='Enregistrer'
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

    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <ComplementInfo/>
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