import React, {Component} from 'react';
import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
 import { H1, P,  Space} from "src/components";
import GlobalStyles from "config/GlobalStyles";


class NoFileAttached extends React.PureComponent {

    render() {
        return (
            <View style={GlobalStyles.EmptyComponent}>
                <Space height={50}/>
                <View style={{flex: 1}}>
                    <Image source={require('assests/nodata.png')}
                           resizeMode={'contain'} style={{width: '100%', height: 200}}/>
                </View>
                <H1 style={{textAlign: "center", marginTop: 10}}>Pas de fichier associé !</H1>
                
                <Space height={60}/>
            </View>
        );
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        textAlign: 'left',
        fontSize: 14,
    },
}

export default NoFileAttached;
