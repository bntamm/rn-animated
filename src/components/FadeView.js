import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";



export default class FadeView extends Component {
constructor(props){
  super(props);
  this.state ={
    fadeAnim: new Animated.Value(0)   //Gán = 0 là chưa hiện gì lên
  }
}
componentDidMount(){
  Animated.timing(
    this.state.fadeAnim, {toValue:1 , duration:2000}  //Trong 2s là nó sẽ hiện lên dần dần tới 1
  ).start();
}
    render() {
      const opacity = this.state.fadeAnim;
        return (
          <View  >

              <Animated.View style = {{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'pink',
              width:200,
              height:150,
              opacity
              }}>

                <Text>TamBui hehehehehe</Text>

              </Animated.View>

            </View>
        );
    }
}
