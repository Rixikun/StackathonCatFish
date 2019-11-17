import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import firebase from 'firebase'
// import * as firebase from 'firebase'


export default class LearnDatabase extends React.Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDqUx_yS93bsetnstawiEvUmAN3mBNdVOE",
      authDomain: "swipeformeow.firebaseapp.com",
      databaseURL: "https://swipeformeow.firebaseio.com",
      projectId: "swipeformeow",
      storageBucket: "swipeformeow.appspot.com",
    }
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }
    //https://firebase.google.com/docs/reference/js/firebase.database.Query for info
    //GET console.logs changed data once
    firebase.database().ref('users').once('value', data => {
      console.log(data.toJSON())
    })
    //INSERT creates new table with time-delay
    setTimeout(() => {
      firebase.database().ref('users/004').set({
        name: 'new kid!',
        age: 12,
      }).then(() => {
        console.log("success data!!!")
      }).catch(err => {
        console.log(err)
      })
    }, 5000)
    //UPDATES updates select table & column
    firebase.database().ref('users/001').update({
      name: 'new name '
    })
    //DELETE removes select table(/column)
    // firebase.database().ref('users/003/name').remove()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    )
  }
}

