

import React, {Component} from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default class $ extends Component {
    static propTypes = {
        varial: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <Text>new Page</Text>
        );
    }
}
