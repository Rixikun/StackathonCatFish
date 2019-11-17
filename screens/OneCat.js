import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class OneCat extends React.Component {
  render() {
    const { navigation } = this.props
    const cat = navigation.getParam('cat')
    console.log("type of?", cat)
    return (
      <View style={styles.container}>
        <Text>
          {cat.name}
        </Text>
        <View style={styles.container}>
          <Image source={cat.uri} />
        </View>
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
