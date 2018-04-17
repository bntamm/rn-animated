import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated,Dimensions,TabBarTop,ImageBackground
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import backgroundImage from '../media/h.jpg';
import logoImage from '../media/chim10.png';


const {height, width} = Dimensions.get('window');
export default class HelloApp extends Component {
constructor(props){
  super(props);
  this.state ={
    fadeAnim: new Animated.Value(0)
  }
}
componentDidMount(){
  Animated.timing(
    this.state.fadeAnim, {toValue:1 , duration:2000}
  ).start();
}
    render() {
      // const opacity = this.state.fadeAnim;
        return (

              <Animated.View style = {{width,height}} source={backgroundImage}>


            <Animated.Image
            style={{resizeMode:'center'}}
            source ={logoImage}/>

            </Animated.View>



        );
    }
}
