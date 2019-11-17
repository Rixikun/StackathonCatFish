import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function TextBoxThing() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="Your details here" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      {/* default is vertical, choose 'horizontal' otherwise; make sure its on desired 'View', ScrollView preloads */}
      <ScrollView>
        {courseGoals.map(el => <View style={styles.listItem} key={courseGoals.indexOf(el)}><Text>{el}</Text></View>)}
      </ScrollView>
      {/* <FlatList data={courseGoals} renderItem={itemData => (<View style={styles.listItem}><Text>{itemData}</Text></View>)}>
      </FlatList> */}
    </View>
  );
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
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
