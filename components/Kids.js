import React from 'react'
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';
import InputField from './InputField';
import ErrorMessage from './ErrorMessage';

import {useNavigation} from "@react-navigation/native";


const Kids = (props)=>{
    const navigation = useNavigation();
    const [nomEleve, setnomEleve] = useState('');
    const [prenomEleve, setprenomEleve] = useState('');
    const [id, setid] = useState('');


    useEffect(()=>{
        const {prenomEleves, nomEleves ,id}=props.data;

        setnomEleve(props.data.nomEleve)
        setprenomEleve(props.data.prenomEleve)
        setid(props.data.id);



    },[])

    return (

                                    <View>
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

                                            onChangeText={text => {
                                                setnomEleve(text);
                                                props.dataChangeCallBack(id,{
                                                    nomEleve:text,
                                                    prenomEleve:prenomEleve
                                                })
                                            }}
                                        />
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
                                            keyboardType='email-address'
                                            textContentType='emailAddress'

                                            value={prenomEleve}
                                            onChangeText={text => {setprenomEleve(text)
                                                props.dataChangeCallBack(id,{
                                                    nomEleve:nomEleve,
                                                    prenomEleve:text
                                                })
                                            }}
                                        />
                                    </View>



    )
}

export default Kids;
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