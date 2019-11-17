import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, Button, outputText, setOutputText, Animated } from 'react-native';

export default class Flexing extends React.Component {

  render() {
    // const [outputText, setOutputText] = useState('huh')
    // let sampleText = "interesting things were said about you"

    // const basic3 = (

    // )

    // const basic2 = (
    //   <View style={{ flexDirection: 'row' }}>
    //     <View style={{ ...styles.box2, backgroundColor: '#DEF8EE' }}>
    //       <Text>Log Out</Text>
    //     </View>
    //     <View style={{ ...styles.box2, backgroundColor: '#EEDEF8' }}>
    //       <Text>Settings</Text>
    //     </View>
    //   </View>
    // )

    // const FadeInView = (props) => {
    //   const [fadeAnim] = useState(new Animated.Value(0))

    //   React.useEffect(() => {
    //     Animated.timing(
    //       fadeAnim,
    //       {
    //         toValue: 1,
    //         duration: 1000,
    //       }
    //     ).start();
    //   }, [])
    //   return (<Animated.View style={{ ...props.style, opacity: fadeAnim }}>
    //     {props.children}
    //   </Animated.View>)
    // }


    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        {/* <FadeInView style={{ width: 250, height: 50, justifyContent: 'center', backgroundColor: '#F8EFDE' }}>
          <Text style={{ fontSize: 20, textAlign: 'center', margin: 10 }}>Meeeeooow</Text>
        </FadeInView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignContent: 'center', padding: 50, width: '80%', height: 150 }} >
          {basic2}
        </View>
        <Text>{outputText}</Text>
        <View style={styles.inputWrapper}>
          <TextInput placeholder="Your details here" style={styles.input} />
          <Button title="Add" onPress={() => navigate("TextInput")} />
        </View>
        {basic3} */}
        <View>
          <View style={{ ...styles.box, backgroundColor: '#F8DEEB' }}>

            <Button title="Profile" onPress={() => navigate("TextBoxThing")} />
          </View>
          <View style={{ ...styles.box, backgroundColor: '#DEEAF8' }}>

            <Button title="Login" onPress={() => navigate("LogIn")} />
          </View>
          <View style={{ ...styles.box, backgroundColor: '#F1F8DE' }}>
            <Button title="LearnDatabase" onPress={() => navigate("LearnDatabase")} />
          </View>
        </View>


      </View >
    );
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
  box: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10
  },
  box2: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
  }
})

