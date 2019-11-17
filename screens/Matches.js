import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Button } from 'native-base';

export default class Matches extends React.Component {

  render() {
    const Users = [
      { id: '1', uri: require('../assets/images/cat01.png'), name: 'Coco' },
      { id: '2', uri: require('../assets/images/cat02.jpg'), name: 'Whiskey' },
      { id: '3', uri: require('../assets/images/cat03.png'), name: 'PBNJ' },
      { id: '4', uri: require('../assets/images/cat04.jpg'), name: 'French Toast' },
      { id: '5', uri: require('../assets/images/cat05.jpg'), name: 'Truffles' },
      { id: '6', uri: require('../assets/images/cat06.jpg'), name: 'Biscuit' },
      { id: '7', uri: require('../assets/images/cat07.jpg'), name: 'Pesto' },
      { id: '8', uri: require('../assets/images/cat08.png'), name: 'Pepperoni' },
      { id: '9', uri: require('../assets/images/cat09.png'), name: 'Ginger' },
    ]
    const { navigate } = this.props.navigation

    const meowMatches = Users.map(cat => (
      <View key={cat.id} style={styles.container} >
        <Button style={{ ...styles.listItem, opacity: 50 }} title={cat.name}
          onPress={
            () =>
              // console.log("Object????", cat)
              // navigate("OneCat", cat)
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

