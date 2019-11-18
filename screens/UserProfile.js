import * as React from 'react';
import { StyleSheet, Button, Image, View, Text, Form, Item, Label, Input, FlatList } from 'react-native';
import firebase from 'firebase'

import ImagePick from './ImagePick'

export default class UserProfile extends React.Component {
  state = {
    name: '',
    age: '',
    imageURI: '',
    description: ''
  }

  componentDidMount() {
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
    firebase.database().ref('users').on('value', function (snapshot) {
      console.log(snapshot.val());
      snapshot.forEach(function (data) {
        console.log(data.key);
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation
    const { navigation } = this.props
    const { user, updateCurrUser } = navigation.getParam('user', 'updateCurrUser')
    return (
      <View style={{ ...styles.container, marginTop: 10 }}>
        <Text>Welcome {user.email}</Text>
        <View style={styles.container}>
          <Image source={user.photoURL} />
          <ImagePick />
          <Button title="Update" onPress={updateCurrUser}>
            <Text>Update</Text>
          </Button>
          <Button title="Where's that cat?" style={{ width: null, height: null, backgroundColor: 'yellow' }} onPress={() => {
            navigate("Swipe")
          }} >
          </Button>
          <Button title="Kitty Date?" onPress={() => {
            navigate("Matches")
          }} >
          </Button>
          <Button title="Memo" onPress={() => {
            navigate("TextBoxThing")
          }} >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
})
