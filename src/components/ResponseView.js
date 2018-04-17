import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated, Easing
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import icon from '../media/chim10.png';



export default class ResponseView extends Component {
constructor(props){
  super(props);
  this.state ={
    x:null ,
    y:null ,
    marginLeft: new Animated.Value(0),
    marginTop: new Animated.Value(0)
  }
}


onPress(evt){
  const {locationX , locationY} = evt.nativeEvent;
  this.setState({x : locationX , y:locationY});
}
onMove(evt){    //Bắt sự kiện tọa độ khi click và kéo chuột

  const {locationX , locationY} = evt.nativeEvent;
  const {x , y} = this.state;
  const marginLeft = new Animated.Value(locationX - x);
  const marginTop = new Animated.Value(locationY - y);
  this.setState({marginLeft , marginTop})

}
onRelease(evt){ //Bắt sự kiện tọa độ khi nhả chuột
    const anim1 = Animated.timing(
      this.state.marginLeft,
      {
        toValue:0 ,
        duration:1000,
        easing: Easing.bounce
      }
    );
    const anim2 = Animated.timing(
      this.state.marginTop,
      {
        toValue:0 ,
        duration:1000,
        easing: Easing.bounce
      }
    );

    Animated.parallel([anim1, anim2]).start();

}
    render() {

      const {marginLeft , marginTop} = this.state;

        return (
          <View
          onStartShouldSetResponder = {() => true}
          onMoveShouldSetResponder = {() => true}
          onResponderMove = {this.onMove.bind(this)}
          onResponderRelease = {this.onRelease.bind(this)}
          onResponderGrant= {this.onPress.bind(this)}

          style = {{
          backgroundColor: 'pink',
          flex:1
          }}>

          <Animated.Image
          source ={icon}
          style = {{height:100 , width:100 , marginTop , marginLeft}}
          />
            </View>
        );
    }
}
