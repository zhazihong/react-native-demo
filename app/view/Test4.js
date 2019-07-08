import React, {Component} from 'react';
import {TextInput, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodoListData, setTodoListData } from './reducer';
import store from '../reduxStore';

@connect(
    state => ({
        todoListData: state.view.todoListData
    }),
    dispatch => ({
        getTodoListData: bindActionCreators(getTodoListData, dispatch),
        setTodoListData: bindActionCreators(setTodoListData, dispatch)
    })
)
export default class Test4 extends Component {
    static navigationOptions = {
        title: 'todoList Demo'
    };

    static propTypes = {
        varial: PropTypes.string,
        tt: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            list: ['asdfa', 'asdf'],
        };
    }

    onPressAdd = () => {
        if(this.state.text) {
            console.log(this.state.text);
            // this.setState({list: [...this.state.list, this.state.text], text: ''})
            this.props.setTodoListData(this.state.text);
            this.setState({text: ''});
        } else {
            console.log('不能输入空!');
        }
    };

    render() {
        const list = this.props.todoListData;
        console.log(list);
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <TextInput
                        style={{height: 40, width: '70%', borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: '#008ae6',
                        height: 35,
                        width: 80,
                        borderRadius: 8,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} activeOpacity={0.7} onPress={() => this.onPressAdd()}>
                        <Text style={{color: 'white'}}>add</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, marginTop: 10, marginLeft: 10}}>
                    {
                        list.map((todo, index) => (
                            <Text>{index}. {todo}</Text>
                        ))
                    }
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {

    }
});