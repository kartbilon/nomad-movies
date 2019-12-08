// 아래 탭 네비게이션 바를 의미함.

// 기존 코드
// import { createAppContainer, createBottomTabNavigator } from "react-navigation";

// 수정된 코드
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import { Platform } from "react-native";

import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import React from "react";
import { createStack } from "./config";




const TabNavigation = createBottomTabNavigator(
    {
        Movies: {
            screen: createStack(MoviesScreen, 'Movies'),
            navigationOptions: {
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}
                    name={Platform.OS === "ios" ? "ios-film" : "md-film"} />
            }
        },

        TV: {
            screen: createStack(TVScreen, 'TV'),
            navigationOptions: {
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}
                    name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} />
            }
        },

        Search: {
            screen: createStack(SearchScreen, 'Search'),
            navigationOptions: {
                tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}
                    name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
            }
        }
    },

    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);