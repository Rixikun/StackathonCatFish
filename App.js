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

import LogIn from './screens/LogIn'
import TextBoxThing from './screens/TextBoxThing'
import LearnDatabase from './screens/LearnDatabase'
import SwipeAnimation from './screens/SwipeAnimation'
import ImagePick from './screens/ImagePick'
import UserProfile from './screens/UserProfile'
import Matches from './screens/Matches'
import OneCat from './screens/OneCat'

//navigate b/w screens
const MainNavigator = createStackNavigator({
  // LogIn: { screen: LogIn },
  // UserProfile: { screen: UserProfile },
  // ImagePick: { screen: ImagePick },
  // SwipeAnimation: { screen: SwipeAnimation },
  // TextBoxThing: { screen: TextBoxThing },
  Matches: { screen: Matches },
  OneCat: { screen: OneCat }
  // LearnDatabase: { screen: LearnDatabase }
})

const App = createAppContainer(MainNavigator)

export default App
