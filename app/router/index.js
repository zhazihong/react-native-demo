
import React from 'react';
import StackNavigator from 'react-navigation/src/navigators/StackNavigator';
import { View } from 'react-native';
import HomeTab from './HomeTab';
import Test4 from '../view/Test4';

const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeTab
        },
        Test4: {
            screen: Test4,
        }

    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerTintColor: '#333333',
            headerStyle: {
                elevation: 0, // header取消底部阴影效果
                backgroundColor: '#F2F4F5'
            },
            headerTitleStyle: {
                flex: 1,
                alignSelf: 'center',
                textAlign: 'center',
                fontWeight: '400'
            },
            // 占位 为了使安卓headerTitle居中显示
            headerRight: <View style={{ marginLeft: 5, width: 30 }} />,
            gesturesEnabled: true // 支持手势返回
        }
    }
);

export default AppNavigator;
