import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import NavigateScroll from './screens/NavigateScroll'
import Flexing from './screens/Flexing';
import LogIn from './screens/LogIn'
import TextBoxThing from './screens/TextBoxThing'

const MainNavigator = createStackNavigator({
  Flexing: { screen: Flexing },
  LogIn: { screen: LogIn },
  TextBoxThing: { screen: TextBoxThing },
  // SwipeAnimation: { screen: SwipeAnimation }
  // NavigateScroll: { screen: NavigateScroll }
})

const App = createAppContainer(MainNavigator)

export default App
