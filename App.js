/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {
  createStackNavigator, 
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import MyPlantsScreen from './screens/MyGarden/MyPlantsScreen';
import MyGardenHomeScreen from './screens/MyGarden/MyGardenHomeScreen';
import GrowingHomeScreen from './screens/Growing/GrowingHomeScreen';
import GrowingCategoryScreen from './screens/Growing/GrowingCategoryScreen';
import MoreHomeScreen from './screens/More/MoreHomeScreen';
import GuidesHomeScreen from './screens/Guides/GuidesHomeScreen';
import NavBarItem from './components/NavBarItem/NavBarItem';

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

// Somewhere in your code
_signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    //this.setState({ userInfo });
    console.log(userInfo);
  } catch (error) {
    console.log(error);
    console.log("google error");
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

const BottomNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    //tabBarButtonComponent: NavBarItem,
  }),
}

const TabNavigator = createBottomTabNavigator(RouteConfig, BottomNavigatorConfig);

export default createAppContainer(TabNavigator);
