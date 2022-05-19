import React from 'react'
import {View, Text, ImageBackground,Dimensions, StyleSheet} from 'react-native'
import {  NativeBaseProvider } from 'native-base'
import bc from '../../assets/bc.jpg';
import {TextField} from "@material-ui/core";
const InfoParent = ()=>{
    return (
        <ImageBackground source={bc} style={styles.container}>

        <View style={styles.middle}>
            <Text >Père</Text>
            <View style={styles.cardContainer}>
                <TextField
                label="nom" name="nomPere"   margin="normal" variant="outlined"
               />
                <TextField
                    label="prénom" name="prenomPere"  margin="normal" variant="outlined"
                />
                <TextField
                    label="prfession" name="professionPere"  margin="normal" variant="outlined"
                />
                <TextField
                    label="Télephone" name="telPere"  margin="normal" variant="outlined"
                />
            </View>
            <Text>Mère</Text>
            <View style={styles.cardContainer}>
                <TextField
                    label="nom" name="nomMere"   margin="normal" variant="outlined"
                />
                <TextField
                    label="prénom" name="prenomMere"  margin="normal" variant="outlined"
                />
                <TextField
                    label="prfession" name="professionMere"  margin="normal" variant="outlined"
                />
                <TextField
                    label="Télephone" name="telMere"  margin="normal" variant="outlined"
                />
            </View>
        </View>

        </ImageBackground>
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
        backgroundColor: '#fff',

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
})