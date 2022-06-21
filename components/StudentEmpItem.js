import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback, Dimensions, Image, TouchableOpacity } from 'react-native';

import GlobalStyles from "../assets/GlobalStyles";

import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');

class StudentEmpItem extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.item)
        const { prenomEleve, nomEleve, image, convocations_count, convocations_today } = this.props.item

        return (
            <TouchableNativeFeedback onPress={this.props.pressHandler} style={{overflow:'visible'}}>
                <View style={GlobalStyles.cardprofilestyle}>
                    <View style={{
                        flex: 1,

                    }}>
                        <View style={GlobalStyles.veiwimagestyle}>
                            <Image style={GlobalStyles.ImageStyle}
                                   source={{ uri: 'http://192.168.1.21:8000/assets/'+image }} />
                        </View>
                        <View style={GlobalStyles.Cardename}>
                            <Text style={GlobalStyles.Title}>{nomEleve} {prenomEleve}</Text>
                            <Text style={GlobalStyles.SubTitle}> Niveau scolaire : {this.props.item.class.level.level}</Text>
                            {this.props.item.class != null ?
                                <Text style={GlobalStyles.SubTitle}>Classe : {this.props.item.class.name}</Text>
                                : null}


                        </View>
                    </View>

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
        shadowOffset: { width: 0, height: 1.0 },
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
StudentEmpItem.propTypes = {
    pressHandler: PropTypes.func.isRequired,
};

export default StudentEmpItem;
