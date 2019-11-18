import React, { useState, useReducer } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button, } from 'native-base'

import * as firebaseLogin from 'firebase'
// const firebaseConfig = {
//   apiKey: "AIzaSyDqUx_yS93bsetnstawiEvUmAN3mBNdVOE",
//   authDomain: "swipeformeow.firebaseapp.com",
//   databaseURL: "https://swipeformeow.firebaseio.com",
//   projectId: "swipeformeow",
//   storageBucket: "swipeformeow.appspot.com",
// }
// firebase.initializeApp(firebaseConfig)

import ImagePick from './ImagePick'
import UserProfile from './UserProfile'

export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: '',
      imageURI: ''
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 characters")
        return;
      }
      firebaseLogin.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (err) {
      console.log(err.toString())
    }
  }

  updateCurrUser = () => {
    try {
      firebaseLogin.auth().onAuthStateChanged(function (user) {
        if (user) {
          // Updates the user attributes:
          user.updateProfile({ // <-- Update Method here
            photoURL: ""
          }).then(function () {
            var photoURL = user.photoURL;
            console.log('updated user>>>>', user)
          }, function (error) {
            // An error happened.
          });
        }
      });
    } catch (err) {
      console.log(err)
    }
  }

  loginUser = (email, password) => {
    const { navigate } = this.props.navigation
    try {
      firebaseLogin.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
        navigate("UserProfile", {
          user,
          updateCurrUser: this.updateCurrUser
        })
      })
    }
    catch (err) {
      console.log(err.toString())
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
        keyboardVerticalOffset={60}
      >
        <Container style={{ ...styles.container, backgroundColor: '#EFE2E5' }}>
          <View style={{ alignItems: 'center', justifyContent: 'center', margin: 'auto', padding: 0 }}>
            <Image source={require('../assets/images/catIcon.png')} style={{ borderRadius: 75, borderWidth: 1, borderColor: 'grey', margin: 20, width: 150, height: 150 }} />
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>


            <Button style={{ marginTop: 10 }} full rounded success onPress={() => this.loginUser(this.state.email, this.state.password)}>
              <Text style={{ color: 'white' }}>Login</Text>
            </Button>
            <Button style={{ marginTop: 10 }} full rounded primary onPress={() => this.signUpUser(this.state.email, this.state.password)}>
              <Text style={{ color: 'white' }}>Sign Up</Text>
            </Button>
          </Form>
        </Container >
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },

})

