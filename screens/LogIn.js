import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button } from 'native-base'

import * as firebaseLogin from 'firebase'
// const firebaseConfig = {
//   apiKey: "AIzaSyDqUx_yS93bsetnstawiEvUmAN3mBNdVOE",
//   authDomain: "swipeformeow.firebaseapp.com",
//   databaseURL: "https://swipeformeow.firebaseio.com",
//   projectId: "swipeformeow",
//   storageBucket: "swipeformeow.appspot.com",
// }
// firebase.initializeApp(firebaseConfig)

export default class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: '',
      imageURI: ''
    })
  }
  signUpUser = (email, password, imageURI) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 characters")
        return;
      }
      firebaseLogin.auth().createUserWithEmailAndPassword(email, password, imageURI)
    }
    catch (err) {
      console.log(err.toString())
    }
  }

  loginUser = (email, password, imageURI) => {
    try {
      firebaseLogin.auth().signInWithEmailAndPassword(email, password, imageURI).then(function (user) {
        console.log(user)
      })
    }
    catch (err) {
      console.log(err.toString())
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ alignItems: 'center', paddingBottom: 50 }}>
          <Image
            source={require('../assets/images/cat01.png')}
            style={{ width: 100, height: 100 }}
          />
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
          <Item floatingLabel>
            <Label>Profile Image</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(imageURI) => this.setState({ imageURI })}
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

