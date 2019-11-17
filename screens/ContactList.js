import React from 'react';
import { StyleSheet, View, Text, TextInput, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Label, Button, Icon, List, ListItem } from 'native-base'
import { database } from 'firebase';
//init firebase
// import * as firebase from 'firebase'
// const firebaseConfig = {
//   apiKey: "AIzaSyDqUx_yS93bsetnstawiEvUmAN3mBNdVOE",
//   authDomain: "swipeformeow.firebaseapp.com",
//   databaseURL: "https://swipeformeow.firebaseio.com",
//   projectId: "swipeformeow",
//   storageBucket: "swipeformeow.appspot.com",
// }
// firebase.initializeApp(firebaseConfig)
//

let data = ["John", "Jess"]

export default class ContactList extends React.Component {
  constructor(props) {
    super(props)
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      listViewData: database,
      newContact: ""
    }


  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Content>
            <Item>
              <Input placeholder="Add name" />
              <Button>
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>
        <Content>
          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data => {
              <ListItem>
                <Text>{data}</Text>
              </ListItem>
            }}
            renderLeftHiddenRow={data =>
              <Button full>
                <Icon name="info-circle" />
              </Button>}
            renderRightHiddenRow={data =>
              <Button full danger>
                <Icon name="trash" />
              </Button>}
            leftOpenValue={-75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

})

