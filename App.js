import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { vars as globalVars } from "./styles/global";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import MyPlantsScreen from "./screens/MyGarden/MyPlantsScreen";
import MyGardenHomeScreen from "./screens/MyGarden/MyGardenHomeScreen";
import GrowingHomeScreen from "./screens/Growing/GrowingHomeScreen";
import GrowingCategoryScreen from "./screens/Growing/GrowingCategoryScreen";
import MoreHomeScreen from "./screens/More/MoreHomeScreen";
import GuidesHomeScreen from "./screens/Guides/GuidesHomeScreen";
import NavBarItem from "./components/NavBarItem/NavBarItem";
import LoginScreen from "./screens/Login/LoginScreen";
import WelcomeScreen from "./screens/Login/WelcomeScreen";
import AuthLoadingScreen from "./screens/Login/AuthLoadingScreen";

const MyGardenNavigator = createStackNavigator({
  MyGardenHome: { screen: MyGardenHomeScreen },
  MyPlants: { screen: MyPlantsScreen }
});

const GrowingNavigator = createStackNavigator({
  GrowingHome: { screen: GrowingHomeScreen },
  GrowingCategory: { screen: GrowingCategoryScreen }
});

const GuidesNavigator = createStackNavigator({
  GuidesHome: { screen: GuidesHomeScreen }
});

const MoreNavigator = createStackNavigator({
  MoreHome: { screen: MoreHomeScreen }
});

const RouteConfig = {
  // TODO: In progress with isActive checking....
  MyGarden: {
    screen: MyGardenNavigator,
    navigationOptions: {
      tabBarButtonComponent: props => { 
        return (
          <NavBarItem {...props} title="My garden" />
        )
      }
    }
  },
  Growing: {
    screen: GrowingNavigator,
    navigationOptions: {
      tabBarButtonComponent: props => (
        <NavBarItem {...props} title="What can I grow?" />
      )
    }
  },
  Guides: {
    screen: GuidesNavigator,
    navigationOptions: {
      tabBarButtonComponent: props => (
        <NavBarItem {...props} title="Growing guides" />
      )
    }
  },
  More: {
    screen: MoreNavigator,
    navigationOptions: {
      tabBarButtonComponent: props => (
        <NavBarItem {...props} title="More" />
      )
    }
  }
  /*
  Example of a standard menu item:
  MyGarden: { 
    screen: MyGardenNavigator, 
    tabBarLabel: 'My Garden',
  },
  */
};

const BottomNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    //tabBarButtonComponent: NavBarItem,
    // tabBarButtonComponent: <NavBarItem {...props}  title="n/a" />
  }),
  // navigationOptions: {
  //     tabBarLabel: "Menu",
  //     tabBarButtonComponent: props => <NavBarItem {...props} title="Test" />
  // },
  // tabBarOptions: {
  //   style: {
  //     flex: 0.15,
  //     justifyContent: "space-between",
  //     backgroundColor: "#fff",
  //     height: 10
  //   }
  // },
  initialRouteName: "MyGarden",
  tabBarOptions: {
    activeTintColor: "#000000",
    inactiveTintColor: "#000000",
    activeBackgroundColor: globalVars.lightGreen,
    inactiveBackgroundColor: globalVars.white,
    style: {
      height: 87
      // paddingVertical: 5,
      // backgroundColor: "transparent"
    },
    labelStyle: {
      fontSize: 12,
      lineHeight: 20
    }
  }
};

const TabNavigator = createBottomTabNavigator(
  RouteConfig,
  BottomNavigatorConfig
);

TabNavigator.navigationOptions = ({ navigation }) => {
  return {
    tabBarLabel: ({ focused, tintColor }) => {
      return {
        tabBarLabel: "Menu"
        // title: "Test123"
      };
    }
  };
};
const AuthStack = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: TabNavigator,
      Auth: AuthStack,
      AuthLoading: AuthLoadingScreen
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
