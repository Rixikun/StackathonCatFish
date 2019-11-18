import React, { useState, useReducer } from 'react';
import { StyleSheet, Image, Text, View, Animated, Dimensions, PanResponder } from 'react-native';

import { Users } from './CatList'

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
let likeyUsers = []

export default class SwipeAnimation extends React.Component {
  constructor() {
    super()
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0,
      like: false
    }
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })
    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.dislikeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({
              currentIndex: this.state.currentIndex + 1,
              like: true
            }, () => {
              this.position.setValue({ x: 0, y: 0 })
              const foundCat = Users.find(cat => cat.id === this.state.currentIndex)
              foundCat.like = this.state.like
              likeyUsers = Users.filter(cat => cat.like === true)
            })
          })
        }

        else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1, like: false }, () => {
              this.position.setValue({ x: 0, y: 0 })
              const foundCat = Users.find(cat => cat.id === this.state.currentIndex)
              foundCat.like = this.state.like
            })
          })
        }

        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }

      }
    })
  }

  renderUsers = () => {
    return Users.map((item, i) => {
      if (i < this.state.currentIndex) {
        return null
      } else if (i === this.state.currentIndex) {
        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id}
            style={
              [this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 90,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute',
              }
              ]}>

            <Animated.View style={{ opacity: this.likeOpacity, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>OwO</Text>
            </Animated.View>

            <Animated.View style={{ opacity: this.dislikeOpacity, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>UnU</Text>
            </Animated.View>

            <Image
              source={item.uri}
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20, marginBottom: 90 }}
            />
          </Animated.View >
        )
      } else {

        return (
          <Animated.View
            key={item.id}
            style={
              [
                {
                  opacity: this.nextCardOpacity,
                  transform: [{ scale: this.nextCardScale }]
                  ,
                  height: SCREEN_HEIGHT - 90,
                  width: SCREEN_WIDTH,
                  padding: 10,
                  position: 'absolute',
                }
              ]}>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '-30deg' }], position: 'absolute', top: 50, left: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'green', color: 'green', fontSize: 32, fontWeight: '800', padding: 10 }}>OwO</Text>
            </Animated.View>

            <Animated.View style={{ opacity: 0, transform: [{ rotate: '30deg' }], position: 'absolute', top: 50, right: 40, zIndex: 1000 }}>
              <Text style={{ borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10 }}>UnU</Text>
            </Animated.View>


            <Image
              source={item.uri}
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20, marginBottom: 90 }}
            />
          </Animated.View >
        )
      }
    }).reverse()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* header */}
        <View style={{ height: 30, alignItems: 'center', margin: 10 }}>
          <Text>Fishing~</Text>
        </View>
        {/* content */}
        <View style={{ flex: 1 }}>
          {this.renderUsers()}
        </View>

        {/* footer */}
        <View style={{ height: 30, alignItems: 'center', margin: 10 }}>
          <Text>Swat or Purr?</Text>
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
})


export { likeyUsers }



