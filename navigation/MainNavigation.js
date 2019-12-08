// 위 스택 네비게이션을 의미함.
// 스택 네비게이션 in (탭 네비게이션. 디테일 스크린)

// 기존 코드
// import { createStackNavigator, createAppContainer } from "react-navigation";

// 수정한 코드
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

// 네이게이션
import TabNavigation from "./TabNavigation";
// 스크린
import DetailScreen from "../screens/Detail";
import { headerStyles } from "./config";


// 아래
const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles,
            }
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(MainNavigation);