import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function TextBoxThing() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enteredGoal }])
  }

  return (
    <View style={{ ...styles.container, backgroundColor: '#EFE2E5' }}>
      <View style={styles.inputWrapper}>
        <TextInput placeholder="Memo" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      {/* default is vertical, choose 'horizontal' otherwise; make sure its on desired 'View', ScrollView preloads */}
      {/* <ScrollView>
        {courseGoals.map(el => <View style={styles.listItem} key={courseGoals.indexOf(el)}><Text>{el}</Text></View>)}
      </ScrollView> */}
      <FlatList data={courseGoals} renderItem={itemData => (<View style={styles.listItem}><Text style={{ color: "#a33505", fontSize: 20 }}>{itemData.item.value}</Text></View>)}>
      </FlatList>
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
    backgroundColor: '#fcf4d4',
    borderColor: '#d4754c',
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 5,
  }
})

