import React, {Component} from 'react';
import {View, Text, ImageBackground, Dimensions, Image} from 'react-native';
 import { H1, P,  Space} from "src/components";
import GlobalStyles from "config/GlobalStyles";


class EmptyComponent extends React.PureComponent {

    render() {
        return (
            <View style={GlobalStyles.EmptyComponent}>
                <Space height={50}/>
                <View style={{flex: 1}}>
                    <Image source={require('assests/nodata.png')}
                           resizeMode={'contain'} style={{width: '100%', height: 200}}/>
                </View>
                <H1 style={{textAlign: "center", marginTop: 10}}>Aucune donnée disponible</H1>
                <P style={{textAlign: "center"}}>il n'y a aucune donnée à vous montrer pour
                    le moment</P>
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

export default EmptyComponent;
