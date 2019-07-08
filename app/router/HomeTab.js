
import React from 'react';
import { Platform, Image, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Test1 from '../view/Test1';
import Test2 from '../view/Test2';
import Test3 from '../view/Test3';


const tabIconStyle = {
    height: Platform.OS === 'ios' ? 20 : 22,
    width: Platform.OS === 'ios' ? 20 : 22,
    marginTop: Platform.OS === 'ios' ? 7 : 0
};

const tintColor = '#989898';
const activeBlueColor = '#008ae6';

function TabBarIcon({ source }) {
    return <Image resizeMode="contain" style={tabIconStyle} source={source} />;
}

const HomeTab = TabNavigator(
    {
        Test1: {
            navigationOptions: {
                header: null,
                tabBarLabel: 'TEST1',
                tabBarIcon: ({ focused }) => {
                    const icon = require('../images/test.png');
                    const active_icon = require('../images/test_active.png');

                    return <TabBarIcon source={focused ? active_icon : icon} />;
                }
            },
            screen: Test1
        },
        Test2: {
            navigationOptions: {
                // header: null,
                headerTitle: 'TEST2',
                tabBarLabel: 'TEST2',
                headerLeft: <View style={{ marginRight: 5, width: 30 }} />,
                tabBarIcon: ({ focused }) => {
                    const icon = require('../images/test.png');
                    const active_icon = require('../images/test_active.png');

                    return <TabBarIcon source={focused ? active_icon : icon} />;
                }
            },
            screen: Test2
        },
        Test3: {
            navigationOptions: {
                header: null,
                tabBarLabel: 'TEST3',
                tabBarIcon: ({ focused }) => {
                    const icon = require('../images/test.png');
                    const active_icon = require('../images/test_active.png');

                    return <TabBarIcon source={focused ? active_icon : icon} />;
                }
            },
            screen: Test3
        }
    },
    {
        tabBarPosition: 'bottom',
        backBehavior: true, // 后退按钮是否会使Tab键切换到初始选项卡
        swipeEnabled: false, //! !!不使用滑动 否则会导致安卓首页swiper显示有问题
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: activeBlueColor,
            inactiveTintColor: tintColor,
            showIcon: true,
            style: {
                backgroundColor: 'white',
                borderTopColor: 'rgba(0, 0, 0, .1)',
                marginBottom: 0
            },
            tabStyle: {
                backgroundColor: 'white'
            },
            labelStyle: {
                marginHorizontal: 0,
                marginBottom: Platform.OS === 'ios' ? 5 : 0,
                marginTop: 2,
                fontSize: 10
                // height: 12
            },
            indicatorStyle: {
                backgroundColor: 'transparent'
            }
        }
    }
);
export default HomeTab;
