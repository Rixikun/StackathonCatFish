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
        <View style={{ ...styles.container, paddingTop: 25, paddingBottom: 50, height: 200 }}>
          <Text style={{ fontSize: 18 }}>Insert descriptions here...</Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#EFE2E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
