
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Test4 from "./Test4";

export default class Test extends Component {
    static propTypes = {
        varial: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor:'#008ae6', height: 44, width: 200, borderRadius: 8, justifyContent: 'center', alignItems: 'center'}} activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Test4')}>
            <Text style={{color: 'white'}}>TEST1 点击跳转到 TEST4 </Text>
            </TouchableOpacity>
            </View>
        );
    }
}
