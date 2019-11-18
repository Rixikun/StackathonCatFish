import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class OneCat extends React.Component {
  render() {
    const { navigation } = this.props
    const cat = navigation.getParam('cat')
    console.log("type of?", cat)
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 40, fontStyle: 'italic', color: '#80422a' }}>
          {cat.name}
        </Text>
        <View style={{ width: 300, height: 300 }}>
          <Image source={cat.uri} style={{ flex: 1, width: undefined, height: undefined }} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
