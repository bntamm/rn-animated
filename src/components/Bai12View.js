import {
  AppRegistry, Text, View, StatusBar, StyleSheet, TouchableOpacity,
  Button, Image, TextInput, Animated, Easing,Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import icon from '../media/chim10.png';
import hinh1 from '../media/hinh1.jpg';
import hinh2 from '../media/hinh2.jpg';
import hinh3 from '../media/hinh3.jpg';
import hinh4 from '../media/hinh4.jpg';
import hinh5 from '../media/hinh5.jpg';


const {width} = Dimensions.get('window');
const arrImage = [hinh1, hinh2, hinh3, hinh4, hinh5];

export default class Bai12View extends Component {
constructor(props){
  super(props);
  this.state ={
    x:null ,
    y:null ,
    rotate: new Animated.Value(0),
    index: 0
  }
}


onPress(evt){
  const {locationX , locationY} = evt.nativeEvent;
  this.setState({x : locationX , y:locationY});
}
onMove(evt){    //Bắt sự kiện tọa độ khi click và kéo chuột

  const {locationX , locationY} = evt.nativeEvent;
  const {x , y} = this.state;
  const tyLe = new Animated.Value(1.5 * (locationX - x) / width);

  if(1.5 * (locationX - x) / width > 1){
    this.setState({
      index : (this.state.index + 1) % 5,
      x : locationX,
      y : locationY
    });
  }

  if(1.5 * (locationX - x) / width < -1){
    this.setState({
      index : (this.state.index - 1 + 5) % 5,
      x : locationX,
      y : locationY
    });
  }

  this.setState({rotate : tyLe});
}
onRelease(evt){ //Bắt sự kiện tọa độ khi nhả chuột
  Animated.timing(
    this.state.rotate,
    {
      toValue:0,
      duration:500,
      easing: Easing.bounce
    }
  ).start();

}
    render() {

      const rotate = this.state.rotate.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-20deg', '20deg'],
      });

      const opacity = this.state.rotate.interpolate({
        inputRange: [-1 , 0 , 1],
        outputRange: [0, 1 , 0],
      });

        return (
          <View
          onStartShouldSetResponder = {() => true}
          onMoveShouldSetResponder = {() => true}
          onResponderMove = {this.onMove.bind(this)}
          onResponderRelease = {this.onRelease.bind(this)}
          onResponderGrant= {this.onPress.bind(this)}

          style = {{
          backgroundColor: 'pink',
          flex:1,
          justifyContent:'center',
          alignItems:'center'
          }}>

          <Animated.Image
          source ={arrImage[this.state.index]}
          style = {{height:300 , width:200 , opacity,transform:[{rotate}]}}
          />
            </View>
        );
    }
}
