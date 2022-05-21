import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {  NativeBaseProvider } from 'native-base'
import { useForm, useStep} from "react-hooks-helper";
import Contact from './stepForm/Contact'
import Enfant from './stepForm/Enfant'
import Submit from './stepForm/Submit'
import InfoParent from "./stepForm/InfoParent";

const defaultData= {
    nomPere:"",  prenomPere:"",  telPere:"",  professionPere:"",
    nomMere:"",  prenomMere:"",  telmere:"",  professionMere:"",
};

const steps = [
    {id: 'infoParent'},
    {id: 'contact'},
    {id: 'enfant'},
    {id: 'submit'},
];

const MultiStepForm = () =>{
    const [ formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
      initialStep: 0,
    });

    const props = { formData, setForm, navigation};

    switch(step.id){
        case "infoParent":
            return <InfoParent {...props} />;
        case "contact":
            return <Contact {...props} />;
        case "enfant":
            return <Enfant {...props} />;
        case "submit":
            return <Submit {...props} />;
    }
  return (
       <View>
            <Text>gvbhjn</Text>
        </View>
    )
}

export default ()=>{
    return (
        <NativeBaseProvider>
            <MultiStepForm/>
        </NativeBaseProvider>

    )
}
