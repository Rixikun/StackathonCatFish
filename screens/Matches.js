import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'native-base';

import { likeyUsers } from './Swipe'

export default class Matches extends React.Component {

  render() {
    console.log(likeyUsers)
    const { navigate } = this.props.navigation

    const meowMatches = likeyUsers.map(cat => (
      <View key={cat.id} style={styles.container} >
        <Button style={{ ...styles.listItem, opacity: 50 }} title={cat.name}
          onPress={
            () =>
              this.props.navigation.navigate('OneCat', {
                cat: cat
              })} >
          <Text>{cat.name}</Text></Button>
      </View>
    ))

    return (
      <View style={styles.container}>
        <View style={{ height: 300 }}>
          <ScrollView >
            {meowMatches}
          </ScrollView>
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
  input: { width: '80%', padding: 5, borderWidth: 1, borderColor: 'grey', borderBottomColor: 'orange', borderBottomWidth: 3 },
  inputWrapper: { padding: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  listItem: {
    padding: 10,
    backgroundColor: '#fcf4d4',
    borderColor: '#d4754c',
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 5,
  }
})

