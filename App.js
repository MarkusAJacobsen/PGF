import React from 'react';
import {
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import MyPlantsScreen from './screens/MyGarden/MyPlantsScreen';
import MyGardenHomeScreen from './screens/MyGarden/MyGardenHomeScreen';
import GrowingHomeScreen from './screens/Growing/GrowingHomeScreen';
import GrowingCategoryScreen from './screens/Growing/GrowingCategoryScreen';
import MoreHomeScreen from './screens/More/MoreHomeScreen';
import GuidesHomeScreen from './screens/Guides/GuidesHomeScreen';
import NavBarItem from './components/NavBarItem/NavBarItem';
import LoginScreen from './screens/Login/LoginScreen';
import WelcomeScreen from './screens/Login/WelcomeScreen';
import AuthLoadingScreen from './screens/Login/AuthLoadingScreen';

const MyGardenNavigator = createStackNavigator(
  {
    MyGardenHome: { screen: MyGardenHomeScreen },
    MyPlants: { screen: MyPlantsScreen },
  },
);

const GrowingNavigator = createStackNavigator(
  {
    GrowingHome: { screen: GrowingHomeScreen },
    GrowingCategory: { screen: GrowingCategoryScreen },
  },
);

const GuidesNavigator = createStackNavigator(
  {
    GuidesHome: { screen: GuidesHomeScreen },
  },
);

const MoreNavigator = createStackNavigator(
  {
    MoreHome: { screen: MoreHomeScreen },  
  },
);

const RouteConfig = {
  MyGarden: { 
    screen: MyGardenNavigator, 
    navigationOptions: {
      tabBarLabel: 'My garden',
    },
  },
  Growing: { 
    screen: GrowingNavigator,
    navigationOptions: {
      tabBarLabel: 'Growing',
    },
  },
  CustomTab: {
    screen: GuidesNavigator,
    navigationOptions: () => ({
      tabBarLabel: 'Custom123',
      tabBarButtonComponent: props => (
        <NavBarItem {...props} />
      ),
    }),
  },
  Guides: { 
    screen: GuidesNavigator,
    navigationOptions: {
      tabBarLabel: 'Guides',
    },
  },
  More: { 
    screen: MoreNavigator,
    navigationOptions: {
      tabBarLabel: 'Menu',
    },
  },
}

const BottomNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    //tabBarButtonComponent: NavBarItem,
  }),
}

const TabNavigator = createBottomTabNavigator(RouteConfig, BottomNavigatorConfig);
const AuthStack = createStackNavigator({ Welcome: WelcomeScreen, Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    Main: TabNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  }, {
    initialRouteName: "AuthLoading"
  }
));
