import React, {Component} from 'react';
import {View, Text, TouchableNativeFeedback, Dimensions, Image, TouchableOpacity} from 'react-native';
import  Sm from './Sm';
import H4 from './H4'
import CardContent from "./CardContent";
import GlobalStyles from "../assets/GlobalStyles";
import moment from "moment";

const {height, width} = Dimensions.get('window');
function isTodayOrFuture(date){
    date = stripTime(date);
    return date.diff(stripTime(moment.now())) > 0;
}

function stripTime(date){
    date = moment(date);
    date.hours(0);
    date.minutes(0);
    date.seconds(0);
    date.milliseconds(0);
    return date;
}
// style={{color: isTodayOrFuture(appointment)?'#ffffda':'#cdcdcd'}}
class InformationDetailItems extends React.Component {

    render() {
        const {titre, info, appointment} = this.props.item;

        return (
            <TouchableNativeFeedback onPress={this.props.pressHandler}>
                <View style={[GlobalStyles.Card]}>
                    <CardContent>
                        <View >
                            <H4  style={{color: isTodayOrFuture(appointment)?'#598df8': ''}}>{titre}</H4>
                            <Sm   style={{color: isTodayOrFuture(appointment)?'#598df8':''}}> {info} </Sm>
                        </View>
                    </CardContent>
                    <Sm style={GlobalStyles.dateLeft}> Envoyé le :{moment(appointment).format("DD/MM/YYYY à HH:mm")} </Sm>

                </View>
            </TouchableNativeFeedback>

        );
    }
}

const styles = {
    container: {

        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: (width - 80) / 2,
        marginBottom: 15,
        width: '100%',
        marginTop: 10,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#dddddd',
        shadowOffset: {width: 0, height: 1.0},
        shadowRadius: 4,
        shadowOpacity: 0.5,
        borderColor: '#dddddd',
        borderWidth: 1
    },
    foodBG: {
        height: (height - 300) / 3,
        width: width - 250,
        borderRadius: 15, resizeMode: 'center'
    },
    title: {
        fontSize: 13,
        marginLeft: 8,
        marginRight: 14,
        marginTop: 0,
        color: '#000',
    },
    textContainer: {
        flex: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        // paddingTop:170,

    }
}


export default InformationDetailItems;
