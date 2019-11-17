import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font'
import Text from '../Components/CustomText'

export default class LearnFonts extends React.Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'Raleway-Black': require('../assets/fonts/Raleway-Black.ttf'),
      'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
      'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
      'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded ? (
          <Text type="black">Hi fonts</Text>
        ) : (<ActivityIndicator size="large" />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

})

