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
  // Other
  MoreHomeScreen, } from "@screens";
  import BarcodeSearchScreen from "./screens/Barcode/BarcodeSearchScreen";
  import GuidesCategoryScreen from "./screens/Guides/GuidesCategoryScreen";
  import GuidesItemScreen from "./screens/Guides/GuidesItemScreen";
  import GrowingPreparationStage from "./screens/Growing/GrowingPreparationStage";
  import GrowingPlantingStage from "./screens/Growing/GrowingPlantingStage";
  import SelectAreaScreen from "./screens/More/SelectAreaScreen";
  import ProjectScreen from "./screens/MyGarden/ProjectScreen";
  import ProjectGuideScreen from "./screens/MyGarden/ProjectGuideScreen";
  import FontAwesome5  from 'react-native-vector-icons/FontAwesome5';

  import { HeaderBackButton } from 'react-navigation';

// Header config
const navigationOptions = ({ navigation }) => ({ 
  headerStyle: {
  backgroundColor: globalVars.header
  },
  headerTintColor: globalVars.ligthGrey,
  headerLeft:  (navigation.isFirstRouteInParent() !== true) ? (<FontAwesome5 name={'chevron-left'} color="#fff" size={20} onPress={ () => { navigation.goBack(null) } } style={{ marginLeft: 15 }}  />) : (<View></View>),
  // headerLeft:  (navigation.isFirstRouteInParent() !== true) ? ( <HeaderBackButton onPress={() => navigation.goBack(null)} /> ) : (<View></View>), // original button
  // TODO: add dynamic nickname
  title: "MY GARDEN: NICKNAME",
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
  MyGardenHome: { screen: MyGardenHomeScreen, navigationOptions },
  MyPlants: { screen: MyPlantsScreen, navigationOptions },
  ProjectScreen: { screen: ProjectScreen, navigationOptions },
  ProjectGuide: { screen: ProjectGuideScreen, navigationOptions },
});

const GrowingNavigator = createStackNavigator({
  GrowingHome: { screen: GrowingHomeScreen, navigationOptions },
  GrowingCategory: { screen: GrowingCategoryScreen, navigationOptions },
  GrowingItem: { screen: GrowingItemScreen, navigationOptions },
  BarcodeSearch: { screen: BarcodeSearchScreen, navigationOptions },
  GrowingPreparation: { screen: GrowingPreparationStage, navigationOptions },
  GrowingPlanting: { screen: GrowingPlantingStage, navigationOptions },
});

const GuidesNavigator = createStackNavigator({
  GuidesHome: { screen: GuidesHomeScreen, navigationOptions },
  GuidesCategory: { screen: GuidesCategoryScreen, navigationOptions },
  GuidesItem: { screen: GuidesItemScreen, navigationOptions },
  GuidesSteps: { screen: GuidesStepsScreen, navigationOptions },
  BarcodeSearch: { screen: BarcodeSearchScreen, navigationOptions },
});

const MoreNavigator = createStackNavigator({
  MoreHome: { screen: MoreHomeScreen, navigationOptions },
  SelectArea: { screen: SelectAreaScreen, navigationOptions },
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
        <NavBarItem {...props} title="New project" />
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
