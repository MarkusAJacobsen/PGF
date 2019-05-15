import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { vars as globalVars } from "@utils/global";
import { Platform, StyleSheet, Text, View, Button } from "react-native"; 
import {  NavBarItem,
  // Login
  WelcomeScreen,
  LoginScreen,
  AuthLoadingScreen,  
  // MyGarden
  MyPlantsScreen,
  MyGardenHomeScreen,
  // Growing
  GrowingHomeScreen,
  GrowingCategoryScreen,
  GrowingItemScreen,
  // Guides
  GuidesHomeScreen,
  GuidesStepsScreen,
  // Barcode
  BarcodeSearchScreen,
  // Other
  MoreHomeScreen, } from "@screens"; 
  import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

import { HeaderBackButton } from 'react-navigation';
import { fetchUsername } from "@utils/functions"; // TODO: fix fetchUsername logic, can't get username, only objects/Promise

// Header config
// @flow  
const navigationOptions = ({ navigation }) => ({  
  headerStyle: {
  backgroundColor: globalVars.header
  },
  headerTintColor: globalVars.ligthGrey,
  headerLeft:  (navigation.isFirstRouteInParent() !== true) ? (<FontAwesome5 name={'chevron-left'} color="#fff" size={20} onPress={ () => { navigation.goBack(null) } } style={{ marginLeft: 15 }}  />) : (<View></View>),
  // headerLeft:  (navigation.isFirstRouteInParent() !== true) ? ( <HeaderBackButton onPress={() => navigation.goBack(null)} /> ) : (<View></View>), // original button
  
  // title: `${navigation.state.params.name}'s Profile'`, 
  // TODO: add dynamic nickname
  // TODO: fix object to string (username)
  // FAIL: only gets objects/Promise from asyncstorage 
  title: `MY GARDEN`, 
  headerRight: ( <FontAwesome5 name={'smile-beam'} light onPress={ () => {  } } style={{ marginRight: 15,  fontSize: 25, color: "#fff" }}  /> ),
  headerTitleStyle: { 
      color: globalVars.white,
      textAlign:"center", 
      fontSize: 15,
      flex:1,
      fontFamily: globalVars.normal,
      fontWeight: "normal"
  } 
});
 
 
const MyGardenNavigator = createStackNavigator({
  MyGardenHome: { screen: MyGardenHomeScreen, navigationOptions, params: { "name": fetchUsername() } },
  MyPlants: { screen: MyPlantsScreen, navigationOptions }
});

const GrowingNavigator = createStackNavigator({
  GrowingHome: { screen: GrowingHomeScreen, navigationOptions },
  GrowingCategory: { screen: GrowingCategoryScreen, navigationOptions },
  GrowingItem: { screen: GrowingItemScreen, navigationOptions },
  BarcodeSearch: { screen: BarcodeSearchScreen, navigationOptions },
});

const GuidesNavigator = createStackNavigator({
  GuidesHome: { screen: GuidesHomeScreen, navigationOptions },
  GuidesSteps: { screen: GuidesStepsScreen, navigationOptions }
});

const MoreNavigator = createStackNavigator({
  MoreHome: { screen: MoreHomeScreen, navigationOptions }
});

const RouteConfig = { 
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
        <NavBarItem {...props} title="What can I grow" />
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
        <NavBarItem {...props} icon="bars" />
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
      height: 80 
    },
    labelStyle: {
      fontSize: 12,
      lineHeight: 20
    }
  },
  resetOnBlur: true, // Reset the state of any nested navigators when switching away from a screen. Defaults to false.
  lazy: true // Defaults to true. If false, all tabs are rendered immediately. When true, tabs are rendered only when they are made active for the first time. Note: tabs are not re-rendered upon subsequent visits.
};

const TabNavigator = createBottomTabNavigator(
  RouteConfig,
  BottomNavigatorConfig
); 

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
