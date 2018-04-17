import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";



export default class TransformView extends Component {
constructor(props){
  super(props);
  this.state ={
    transform: new Animated.Value(0)
  }
}
  componentDidMount(){
  const anim1 = Animated.timing(
    this.state.transform,
    {
      toValue:1,
      duration:1000
    }
  );

  const anim2 = Animated.timing(
    this.state.transform,
    {
      toValue:0,
      duration:1000
    }
  );

  const finalAnim = Animated.sequence([anim1, anim2]);
  Animated.loop(finalAnim).start(); //lặp lại hiệu ứng
}

    render() {

  //     const backgroundColor = this.state.colorAnim.interpolate({
  // inputRange: [0,0.5 ,1],
  // outputRange: ['green','red' ,'yellow'],
  // });

      const rotate = this.state.transform.interpolate({
  inputRange: [0,0.5 ,1],
  outputRange: ['15deg','0deg' ,'-15deg'],
  });

        return (
          <View  >

              <Animated.View style = {{
              justifyContent: 'center',
              alignItems: 'center',
              width:200,
              height:150,
              backgroundColor:'green',
              transform:[{rotate}]
              }}>

              </Animated.View>

            </View>
        );
    }
}
