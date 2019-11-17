import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//init firebase
import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyDqUx_yS93bsetnstawiEvUmAN3mBNdVOE",
  authDomain: "swipeformeow.firebaseapp.com",
  databaseURL: "https://swipeformeow.firebaseio.com",
  projectId: "swipeformeow",
  storageBucket: "swipeformeow.appspot.com",
}
firebase.initializeApp(firebaseConfig)

//grab screens
import NavigateScroll from './screens/NavigateScroll'
import Flexing from './screens/Flexing';
import LogIn from './screens/LogIn'
import TextBoxThing from './screens/TextBoxThing'
import LearnDatabase from './screens/LearnDatabase'
import SwipeAnimation from './screens/SwipeAnimation'
import ImagePick from './screens/ImagePick'

//navigate b/w screens
const MainNavigator = createStackNavigator({
  // Flexing: { screen: Flexing },
  LogIn: { screen: LogIn },
  // TextBoxThing: { screen: TextBoxThing },
  // SwipeAnimation: { screen: SwipeAnimation }
  // NavigateScroll: { screen: NavigateScroll }
  // LearnDatabase: { screen: LearnDatabase }
  // ImagePick: { screen: ImagePick }
})

const App = createAppContainer(MainNavigator)

export default App
